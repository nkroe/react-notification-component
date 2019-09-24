### React Notification Component

![alt text](https://raw.githubusercontent.com/nkroe/react-notification-component/master/preview.gif "Preview")

## Installation

```
npm i react-notification-component
```

## Usage

```js
import { NotifyHandler, NotifyComponent } from 'react-notification-component';

function App() {
  return (
    <div>
      <div onClick={() => {
          NotifyHandler.add()
        }}>
      </div>
      <NotifyComponent />
    </div>
  );
}

```

#### That's all

## Settings

#### Default arguments for "add" method
#### Note! If you want to specify a specific argument, then specify not needed in the form of default. 
#### See more settings examples in the end :)

```js
NotifyHandler.add(
  "Title",         // Notification title
  "Message",       // Message
  { },             // Settings
  { },             // Styles
  () => { },       // Callback on click
  () => { }        // Callback on time end
)
```
#### Arguments

<table>
  <tr>
    <th>Title</th>
    <th>Message</th>
    <th>Settings</th>
    <th>Styles</th>
    <th>Callback on click</th>
    <th>Callback on timeout</th>
  </tr>
  <tr>
    <th>String</th>
    <th>String</th>
    <th>Object</th>
    <th>Object</th>
    <th>Function</th>
    <th>Function</th>
  </tr>
</table>

#### Title

```js
'Some title for notification'
```

#### Message

```js
'Some message for notification'
```

#### Settings

```js
{
  time: 2,                     // Time how much notification will be shown; default - 2
  animationDelay: 0.3,         // Delay for notification animation; default - 0.3
  animationTimeFunc: 'linear', // Animation func; default - 'linear'
  position: 'RT',              // Position. Options - 'RT', 'RB', 'LT', 'LB'; default - 'RT'; ('RT' - Right Top, 'LB' - Left Bottom)
  hide: true,                  // Hide after time (default - 2); default - true
  progress: true               // Show progress line (timeline); default - true
}
```

#### Styles

```js
  {
    width: 220,                      // Notification width; default - 220
    height: 54,                      // Notification height; default - 54
    mainBackground: '#16a085',       // Background color; default - '#16a085'
    mainBackgroundHover: '#1abc9c',  // Background color on hover; default - '#1abc9c'
    mainBackgroundHoverTime: 0.2,    // Background hover transition; default - 0.2
    styleBlock: {},                  // React styles for notification block (width, height, boxShadow, etc...); default - {}
    styleMain: {},                   // Some styles for main (content) (border); default - {}
    styleTitle: {},                  // Some styles for title; default - {}
    styleMessage: {},                // Some styles for message; default - {}
    styleProgress: {}                // Some styles for progress line; default - {}
  }
```

#### Callback on click

```js
  () => { }                          // Callback function, when user click on notification
```

#### Callback on time end

```js
  () => { }                          // Callback function, when time end
```

### Limitations notification on page
#### Just set prop maxNotify. For an unlimited number of notifications do not specify anything

```js
<NotifyComponent maxNotify={ 5 } />       // Max 5 notification

<NotifyComponent/>                        // Unlimited number of notification
```

### Demo

Coming later

### Examples

```js
NotifyHandler.add(
  'Subscribe', 
  'You are now a subscriber %username%', 
  {
    time: 5,
    animationDelay: 0.3,
    animationTimeFunc: 'linear',
    hide: false,
    progress: true,
    position: 'RT'
   }, 
   {
    width: 220,
    height: 54,
    mainBackground: '#16a085',
    mainBackgroundHover: '#1abc9c',
    mainBackgroundHoverTime: 0.2,
    styleMain: {},
    styleTitle: {}, 
    styleMessage: {}, 
    styleProgress: { background: '#2ecc71' }
   },
   () => {
    console.log('This is callback!');
   },
   () => {
    console.log('This is callback on time end')
   }
)
```
