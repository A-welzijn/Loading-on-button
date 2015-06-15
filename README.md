# A-Welzijn loading-on-button

v1.0.3

### Hoe het eruit ziet

![Screenshot](http://i219.photobucket.com/albums/cc319/Gnomepy/loading-on-button_zpscwqkvdau.jpg)

### Hoe het te gebruiken

```javascript
"dependencies": {
	"awelzijn-loading-on-button": "latest"
 }
```
```javascript
var app = angular.module('yourApp', [
	'awelzijn.loadingonbutton'
]);
```

```html
<button class="btn btn-primary" awelzijn-loading-on-button="ctrl.loading" data-loading-text="Bezig met laden">Test</button>
<button class="btn btn-danger" awelzijn-loading-on-button="ctrl.loading" data-loading-text="Bezig met laden">Test</button>
<button class="btn btn-success" awelzijn-loading-on-button="ctrl.loading" data-loading-text="Bezig met laden">Test</button>
```

Deze directive gaat een laad icoontje tonen als `ctrl.loading` true is.