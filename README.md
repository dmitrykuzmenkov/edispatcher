Event Dispatcher
======
Tiny dependency free event dispatcher


## Install

Use npm to install just run

```bash
npm install edispatcher
```

## Usage

```javascript
var dispatcher = require('edispatcher');

dispatcher.on('event', function (event, data) {
  console.log('Got event with data ' + data);
});

dispatcher.send('event', 'data');
```

## Methods

### on(event_name, callback)

Dispatch triggered event
- *event_name* - name of event as string
- *callback* - callback function to trigger. It applies event name, passed data, source and event suscribers optional

The method returns id of subscriber

### off(id)

Disable trigger handler
- *id* - identifier of subscriber

### all(callback)

Execute on any triggered event
- *callback* - callback function to trigger

### send(event_name, data, source)

Trigger new event
- *event_name* - name of event to be triggered as string
- *data* - data that should be passed
- *source* - trigger source
