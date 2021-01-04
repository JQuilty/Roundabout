Roundabout Tournament Management. Work in progress, this will be a remake of what was done as a capstone for Oregon State University's CS467. The end goal is to create a selfhosted tournament management software without relying on proprietary web services. There will be a public interface that shows the current rankings, intended to be put up on a large monitor or TV at the event, and an organizer view, which allows the Tournament Manager (TO) to do things like create brackets, edit profiles, and declare winners.

This is being recreated to make everything from scratch with experience gained and as a personal project. Additionally, the original project was licensed under GPLv3. As this is intended to be used over a network, AGPLv3 is more appropriate, and being sole author allows me to change the license to another free software license if needed. The original can be found in the Roundabout-capstone repository, and was orignally written by Christopher Brown, Larry Osekwe, and John Quilty.

Immediate TODO List:

    Set up backend for profiles/stats/display pictures.
    Set up bracket display.
    Write/set up tournament logic.
    Write/set up bracket generation and link with profiles.
    Create a public mode for display.
    Create a private mode for management.
    Create authentication for organizer(s) vs users.
    Electron packaging for Windows and Linux.

Later/Potential TODO:

    UI polish.
    Schedules.
    Potential email/SMS integration to send alerts to contestants.
    OAuth Integration.
    Possible embedding of Twitch/Youtube streams for public view.
    Advanced display options for public view (slideshow of stats, standings, etc).
