/**
 * @name PKBlocker
 * @authorLink https://github.com/ParanormalVibe
 * @website https://github.com/ParanormalVibe/PkBlocker
 */

class PKBlocker {
  //#region Boilerplate
  getName() {return "PKBlocker Webhook Colours";}
  getDescription() {return "Grants the ability to place users of PluralKit on a block list.";}
  getVersion() {return "0.1";}
  getAuthor() {return "lgs";}
  //#endregion
  
  constructor() {
    this.enabled = false;
  }

  //#region Events
  // load block list json
  load() {

  }

  // start hiding messages from blocked users
  start() { 
    enabled = true;
    // TODO: show PK blocklist
  }

  // stop hiding messages from blocked users
  stop() { 
    enabled = false;
    // TODO: hide PK block list
  }

  observer(changes) {
    console.log("Hi!")
  }
  //#endregion

  //#region Functions
  
  //
  loadBlockList() {

  }

  // Toggles the block list to show next to the friend list
  enableBlockList() {

  }

  // Toggles the block list to be hidden from view
  disableBlockList() {

  }

  // Clears and populates the users on the block list
  populateBlockList() {

  }

  // Adds a user to the block list
  blockUser() {
    // show a block confirmation
    // hide all of user's messages
  }

  // Removes a user from the block list
  unblockUser() {

  }

  getSettingsPanel() {
    
  }

  //#endregion
}
