# Feed Reader Testing

This programme can display multiple different RSS feeds

## How to open this programme

To open this programme, simply open index.html on any browser

## Feeds

This programme cann pull RSS feeds from four sources: 
- The Udacity Blog
- CSS Tricks 
- HTML5 Rocks
- Udacity Linear Disgressions

## Testing

This programme includes a testing module run by Jasmine. The testing module has tested the main functionalities of the programme, e.g., 
 - all feeds have a URL attached
 - all feeds have a name defined
 - After the loadfeed is run, at one entry appears
 - When the loadfeed is run, the entries change

## Additional edits

At the moment, the page only displays information from the first source. To change the source, you need to change the argument in the loadfeed function within row 32 of app. Alternatively, we could also implement a longer programm to load multiple feeds a the same time

