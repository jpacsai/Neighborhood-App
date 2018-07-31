### To-Do:

...
- [x] generate filters from event list
- [x] add calendar
   - [x] disable days
   - [x] multiselect days
- [x] fix: date format in fetch
- [x] hide/show filter section
- [x] add event counter  
- [x] fix: event list section scroll
- [x] disable month toggle in calendar, display 6 weeks
- [x] move filters to modal window
- [x] add close button to modal
- [x] extract dates from fetch
- [x] inspect date formats in all dates
- [x] disable dates based on extracted data
- [x] fix: modal layout
- [x] change location filters to checkboxes instead of select options
- [x] fix: filtering with multiple locations
- [x] add date to filtering
- [x] add reset filters button + function
- [x] fix: display all events after resetting filters
- [x] refactor: transform day function in DayPicker
- [x] check again all functions using dates for refactoring
- [x] fix: keep checkboxes checked when modal is closed --> move checkbox checked-state to state
   - [x] add 'remove date' function to filtersToApply
   - [x] fix: uncheck all locations when reset is clicked
- [x] fix: event counter when no match found
- [x] add state to check if fetch is ready
- [x] sort event list by date by default
- [x] sort by function
   - [x] date (default)
   - [x] location
   - [x] alphabet
- [x] fix: display list message when no events found
- [x] move display list function to state
- [x] move sorted list to state
- [x] add test marker to map
- [x] find coordinates of places without them
   - [x] add method to find coordinates from address
   - [x] add property to event objects without them
- [x] add all markers to map
- [x] refactor: fix async geocode  
~~cluster markers in same location~~
- [x] add allVenues property to state
- [x] fix: show all venues on map after resetting filters
- [x] close modal when filters applied
- [x] map the flow of actions to store
   - [x] inject venue property into actions
- [x] change logic of displaying markers:
   - [x] reduce displayList into single venues with a list of it's displayed events
   - [x] add new property to store, change list in Map component
- [x] fix: clearing filters when no filters selected triggers resorting
- [x] fix: don't display markers when no match found after filtering
- [x] calculate most north-west and south-east coordinates
- [x] add fitbounds to map  
~~move fitbounds to state~~
- [x] calculate fitbounds for displayed (filtered) markers to trigger auto zoom on markers
- [x] recalculate on filtering, resetting
- [x] add single event infowindow
- [x] zoom in on venue marker when event is clicked in list
***
- [ ] hover or click on venue marker shows all (filtered) events infowindow
- [ ] check area code at ticketmaster API page (Dorset in Midlands???)
- [ ] error handling
- [ ] choose color palette
- [ ] style page
- [ ] make it responsive
- [ ] a11y: 
   - [ ] tab order
   - [ ] aria labels
- [ ] check ticketmaster page form API usage terms
- [ ] add auto scroll upon filtering ( no idea :/ )
- [ ] validate page
- [ ] comment code
- [ ] write readme

