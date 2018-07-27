export function displayWhichList(allEvents, filteredEvents) {
    
    const displayWhich = filteredEvents.length === 0 ? allEvents : 
    filteredEvents === 'no match found' ? null : filteredEvents;
            
    console.log('displaying which', displayWhich);

    const message = 'DISPLAY_LIST';

    return {
        type: message,
        displaying: displayWhich
    }
}