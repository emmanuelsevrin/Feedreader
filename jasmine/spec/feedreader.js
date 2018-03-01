/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

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

         //function testing that a specific feed at a specific index position has a defined, non-null name

         //looping through allfeeds to make sure they all have a name
        for(let i=0; i < allFeeds.length; i++){
            test_name(allFeeds[i],i);
        }

    });

    describe('The Menu', function(){

        it('is hidden by default', function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        })
        
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
