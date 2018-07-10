# OpenOnMac

## Open links from iOS on your Mac by posting a URL to this Node app from Shortcuts

Very, very, very rudimentary. This is just a proof of concept but if it proves legitimately useful over time then I might put in the work to make it more robust.

If you want to try this out yourself, clone the repo and fire up the Node app with `node OpenOnMac`. The logs will output your current IP address as part of a URL which you should set as a URL item in a Shortcut on iOS. Send that URL as input to a "Get Contents of URL" action, set the Method to POST, and add a field to the body with key/value pair `url: <Shortcut Input>`. Make sure to enable the Shortcut for Share Sheet access and you're good to go.

When you come across a link that you want to open on your Mac, tap and hold to bring up the Share Sheet, then run the Shortcut to have the URL posted to the Node app running on your Mac. OpenOnMac will open the link in your default web browser.

By far the biggest caveat here is that the IP address on your Mac is subject to change. If things stop working entirely, try restarting the Node app and checking to see if there's a new IP. If so, copy that over to your Shortcut and you'll be back up and running. Yes I know there are far better ways to deal with something like this — feel free to make a PR.

