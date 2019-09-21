import { EventEmitter } from 'events';

const createUUID = () => {
    const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  };

const Events = {
    change: 'change'
}

class CompManager extends EventEmitter {
    constructor() {
        super();
        this.listComp = []
    }

    add(title = 'Notification', message = 'This is notification', funcs = {}, styles = {}, callback = () => {}, callbackAfter = () => {}){
        let data = {
            id: createUUID(),
            title,
            message,
            funcs,
            styles,
            callback,
            callbackAfter
        };
        this.listComp.unshift(data);
        this.emitChange();
    }

    remove(id) {
        this.listComp = this.listComp.filter(w => w.id !== id);
        this.emitChange();
    }

    emitChange(){
        this.emit(Events.change, this.listComp);
    }

    addChangeListener(callback) {
        this.addListener(Events.change, callback);
    }
    
}

export default new CompManager();