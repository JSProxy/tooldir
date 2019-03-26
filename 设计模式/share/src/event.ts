
interface IEvent {
    name: String,
    callback: Function
}
interface IEventManager {
    on(eventName: String, callback: (data: any)=>void): void,
    emit(eventName: String, params?: any): void
}

class EventManager implements IEventManager {
    private eventList: IEvent [] = []

    public on(eventName: String, callback: (data: any)=>void): void {
        this.eventList.push({name: eventName, callback: callback})
    }

    public emit (eventName: String, params?: any): void {
        for(let item of this.eventList){
            if(eventName === item.name){
                item.callback(params)
            }
        }
    }
}


const eventBus = new EventManager();

eventBus.on('test', (data)=>{
    console.log(data)
})

eventBus.emit('test', '撒娇的给')


