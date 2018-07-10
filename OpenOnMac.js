const express = require('express');
const bodyParser = require('body-parser');
const opn = require('opn');
const ip = require('ip');

const webserver = express();
webserver.use(bodyParser.json());

webserver.post('/open', function(req, res) {
	res.sendStatus(200);
	if (req.body && req.body.url) {
		console.log(`Opening '${req.body.url}'...`);
		opn(req.body.url);
	} else {
		console.error('No URL found in body.', req.body);
	}
});

webserver.listen(8024, () => console.log(`OpenOnMac listening at http://${ip.address()}:8024/open/`));
