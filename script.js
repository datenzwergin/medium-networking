const zoneList = {
    companyLink1: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://voyage-en-bretagne.com/en/homepage/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink2: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'http://breizbridges.com/en/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink3: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://en.indeauville.fr/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink4: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://www.sarthe-tourism.co.uk/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink5: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://www.tourisme-orleansmetropole.com/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink6: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://www.reims-tourism.com/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink7: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://www.burgundy-tourism.com/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink8: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://www.toulouse-visit.com/',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink9: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'http://www.mikitravel.hk/index.html',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
    companyLink10: {
        message: 'Welcome to our booth! Visit our website!',
        openWebSite: 'https://www.relaischateaux.com/us/destinations/europe/france',
        openWebsitePolicy: 'fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    },
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
