# Development

### Link to Deployed Website
https://hastyskunk127.github.io/Development/
### Goal and Value of the Application
I'm currently taking a class on Hieroglyphics and have become interested in Ancient Egypt.
The goal of this website was to allow me and any potential users to learn more about interesting
pharaohs at a glance through the cards, with the ability to store ones that catch their eyes 
in the favorites section and the ability to click on a link to their wikipedia page. The sorts and 
filters also allow users to compare pharaohs on different properties (how long and when they ruled).
### Usability Principles Considered
For ease of use, I used a flex container to space out the pharaoh cards into accessible rows. I made use of react bootstrap cards to make the combination of images and text easily digestible. I also created a dynamically rendered button for each that will either show "Add to favorites" or "Remove from favorites" depending on how many times it has been clicked, which prevents the user from adding favorites that have already been added and vice versa for removing. The filter options are radio buttons to make it clear that only one filter per category can be applied at a time, same for sort. In general, I used flexbox and wrapping throughout to make the page relatively responsive.
### Organization of Components
My Components were App, PharaohCard, and ControlPanel. App contains an instance of the ControlPanel component, which handles applying the different filters/sorts. Each object in my custom created pharaoh data (which I sourced from Wikipedia! Each card has a link to the article I sourced it from) is then mapped to an instance of Pharaoh card, which handles displaying information about the particular pharaoh.
### How Data is Passed Down Through Components
App passes down information about filter/sort props and how to update them (gender, period, favorites, sort) to ControlPanel, and passes information about each pharaoh and props for the list of favorites and
for a callback method that can be used to update the favorites list.
### How the User Triggers State Changes
The user triggers state changes by either selecting a sort (sort by start rule date, length of rule),
filters (gender, time period the pharaoh lived during, favorites), and by clicking Add or Remove to favorites on the pharaoh cards.
