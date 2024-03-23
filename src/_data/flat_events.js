const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

function loadEventsData() {
  try {
    const filePath = path.join(__dirname, 'events.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents);
    let flatEvents = [];
    if(data.eventGroups){
      data.eventGroups.forEach(hostItem => {
        hostItem.events.forEach(event => {
          // Optionally, add host information to each event
          event.host = hostItem.host;
          event.bannerImg = hostItem.banner_img;
          console.log(event);
          flatEvents.push(event);
        });
      });
    }

    return flatEvents;
  } catch (e) {
    console.error(e);
    return [];
  }
}

module.exports = loadEventsData();
