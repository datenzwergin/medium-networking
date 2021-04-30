const zoneList = {
    companyLink2: {
        message: 'Open Breiz Bridges web site !',
        openWebSite: 'https://www.exploreauthenticfrance.com/post/oven-roasted-asparagus-with-herb-vinaigrette',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    }
};

const zoneListArray = Object.keys(zoneList);
for(let i = 0; i < zoneListArray.length; i++) {
    const zoneIndexIndex = zoneListArray[i];
    let triggerOpenPopUp = null;
    WA.onEnterZone(zoneIndexIndex, () => {
        triggerOpenPopUp = WA.openPopup(`${zoneIndexIndex}Rectangle`, zoneList[zoneIndexIndex].message, [
            {
                label: "Close",
                className: "popUpElement",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Open",
                className: "popUpElement",
                callback: (popup) => {
                    WA.openTab(zoneList[zoneIndexIndex].openWebSite);
                    popup.close();
                }
            }
        ]);
    });

    WA.onLeaveZone(zoneIndexIndex, () => {
        triggerOpenPopUp.close();
    });
}
