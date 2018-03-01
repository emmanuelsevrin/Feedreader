/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */


$(function() {


    describe('RSS Feeds', function() {
        
        // tests that the allFeeds variable has been defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        })
 
        //function testing that a specific feed has a defined, non-null URL       
        function test_URLs(feed){
            it('the \'' + feed.name + '\' feed has an URL', function(){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(null);
            })
        }

        //function testing that a specific feed has a name
         function test_name(feed, index){
            it('the ' + index + '(st) feed has a name', function(){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(null);
            })
        }
        
        //looping through allFeeds to ensure an URL in all feeds 
        for(let feed of allFeeds){
            test_URLs(feed);
         };


         //looping through allfeeds to make sure they all have a name
        for(let i=0; i < allFeeds.length; i++){
            test_name(allFeeds[i],i);
        }

    });

    describe('The Menu', function(){

        //making sure the menu is hidden by default
        it('is hidden by default', function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        })
        
        //making sure the menu has visibility when clicked
        it('changes visibility when clicked', function(){
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        })

    })

    
    describe('Initial Entries', function(){

        beforeEach(function(done) {
        	loadFeed(0, done);
        });


        	it('exist within the feed container', function(done) {
                var numEntries = $(".feed .entry").length;
        		expect(numEntries).toBeGreaterThan(0);
                done();
        	})

        })

    describe('New Feed Selection', function(){

        var firstContent = $(".feed").html();

        beforeEach(function(done){
            loadFeed(0, done);
        });


        it('is different', function(done){

            var secondContent = $(".feed").html();
        
            expect(firstContent).not.toBe(secondContent);
            done();
        })

    })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
