const getBookedEvent=()=>{
    const storedBookedEvent=localStorage.getItem('book-event')
    if(storedBookedEvent){
        return JSON.parse(storedBookedEvent)
    }
    return [];
}

const saveBookedEvent=id=>{
   const storedBookedEvent=getBookedEvent();
   const exists=storedBookedEvent.find(eventId=>eventId===id)
   if(!exists){
    storedBookedEvent.push(id);
    localStorage.setItem('book-event',JSON.stringify(storedBookedEvent))
   }
}
export{ getBookedEvent,saveBookedEvent}