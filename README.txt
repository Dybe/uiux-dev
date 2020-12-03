My React Application allows users to browse and book from  travel packages to the African continent. I made the applications using four components:


* App
   * This is where the entire app comes together. It has the list of all the travel packages and their properties which is passed to the FilteredList component as props. 
   * State is empty
* FilteredList
   * Has functionality for filtering and sorting the list of packages according to price, region and type of tourism best suited for the destination.
   * Sets up the title and navigation bar
   * Passes the list of filtered and sorted packages to the DisplayList Component as  props. 
   * State properties reflect ordering and subset of packages shown depending on user preferences
   * Clicks on the navbar update the state of the component to display a different ordering/subset of the list of packages. 
* DisplayList
   * Displays list items passed in as props from FilteredList. 
   * Contains functionality for booking  and un-booking packages
   * Passes list of booked packages as props to BookedList Component. 
   * Has a reference to BookedList allowing to update total price of booked packages
   * State has one property updated every time a trip is booked or un-booked i.e when user clicks “Book” or “Remove Booking” button
* BookedList
   * Displays booked packages received from DisplayList as props
   * Relays updated total price of booked packages to DisplayList through reference
   * State has one property, total, the sum of prices of all booked packages. The total is updated every time a user makes or removes a booking using the respective buttons.