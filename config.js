// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '_',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'good morning',
  greetingAfternoon: 'time 4 the grind,',
  greetingEvening: 'evenin mlady',
  greetingNight: 'go to bed >:(',

  
  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'canvas',
      icon: 'book-open',
      link: 'https://utah.instructure.com/?login_success=1',
    },
    {
      id: '2',
      name: 'discord',
      icon: 'message-square',
      link: 'https://discord.com/channels/@me/762523398378749992',
    },
    {
      id: '3',
      name: 'docs',
      icon: 'file-text',
      link: 'https://docs.google.com/document/u/0/',
    },
    {
      id: '4',
      name: 'drive',
      icon: 'cloud',
      link: 'https://drive.google.com/drive/my-drive',

    },
    {
      id: '5',
      name: 'maps',
      icon: 'map-pin',
      link: 'https://www.google.com/maps/@38.9349376,-77.0239765,14z',
    },
    {
      id: '6',
      name: 'slides',
      icon: 'film',
      link: 'https://docs.google.com/presentation/u/0/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'headphones',
  secondListIcon: 'briefcase',

  // Links
  lists: {
    firstList: [
      {
        name: 'youtube',
        link: 'https://www.youtube.com/?gl=US',
      },
      {
        name: 'netflix',
        link: 'https://www.netflix.com/browse',
      },
      {
        name: 'xfinity',
        link: 'https://www.xfinity.com/stream/',
      },
      {
        name: 'twitch',
        link: 'https://www.twitch.tv/directory/following',
      },
    ],
    secondList: [
      {
        name: 'linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'outlook',
        link: 'https://outlook.live.com/mail/inbox',
      },
      {
        name: 'acnsl',
        link: 'https://acnsl.net/meet-the-acnsl-team/',
      },
      {
        name: 'calendar',
        link: 'https://calendar.google.com/calendar/r',
      },
    ],    
  },
  
  // Weather
  weatherKey: '0c9ab5854945b67983afb64b695ab833',
  weatherIcons: 'White', // 'Nord', 'Dark', 'White','OneDark'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '38.907192',
  defaultLongitude: '-77.036873',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '17:00',
  hourDarkThemeInactive: '07:00',

};
