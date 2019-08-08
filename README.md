# EA-Assessment

## Description
An app made using react which makes a single api call and populates a page using that data.

## How to use
There are two ways this app can be used.

The first and easiest way is to click on this link: https://joshvanoverbeke.github.io/EA-Assessment/ which will take you to a deployed version of the app.

The second way is to clone the main branch of this repository or download it as a zip file.

To do this you may need the latest version of git which can be found here: https://git-scm.com/
Once this is done you must open your shell and cd into the EA-Assessment directory

The next step requires node.js to be downloaded and installed for your shell and can be found here: https://nodejs.org/en/download/
After this and you are in the root of the EA-Assessment directory run the following line in your shell:

```shell
npm install
```

It is normal for this to take awhile. When it is complete and there were no errors run this command:

```shell
npm start
```

Again if there are no errors you should have your very own EA-Assessment app running locally.


### Notes/future work
The app only does one API call but I tried to structure the data in a way that it could populated the page as long as you made a similar query. I didn't accomplish this with the Race/Ethnicity data as the object recieved from the API call for this held data that wasn't relevant but wasn't null or 0. I would also like to add more regular expressions to format the data with uppercases and the like.
A final thing that should be added to an app like this is some way to search for other schools and make a new API call and repopulate the page with the new data.

All in all I enjoyed my time spent making this app and would like to thank EA for the consideration!
