
interface Items {
    className: string;
}

const UserIconX: React.FC<Items> = ({className}) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.464 15.464A5 5 0 0 1 8 14h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Z" fill="currentColor"></path></svg>
    )
}

const WalletIcon: React.FC<Items> = ({className}) => {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1"/></svg>
    )
}

const KnifeAndForkIcon: React.FC<Items> = ({className}) => {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m18.637 2.152.463.772c-.463-.772-.464-.771-.464-.771h-.002l-.002.002-.008.004-.02.013-.06.039a4.734 4.734 0 0 0-.195.139c-.163.12-.384.298-.644.54-.521.487-1.198 1.234-1.868 2.307-1.345 2.151-2.637 5.568-2.637 10.727a.9.9 0 0 0 .9.9h4.1v4.1a.9.9 0 1 0 1.8 0v-18a.9.9 0 0 0-1.363-.772ZM18.2 15.024h-3.186c.139-4.328 1.267-7.142 2.35-8.873.286-.459.57-.844.836-1.163v10.036ZM3.9 2a.9.9 0 0 1 .9.9v4A2.1 2.1 0 0 0 6 8.798V2.9a.9.9 0 1 1 1.8 0v5.898A2.1 2.1 0 0 0 9 6.9v-4a.9.9 0 1 1 1.8 0v4c0 1.844-1.28 3.39-3 3.796V20.9a.9.9 0 1 1-1.8 0V10.696A3.902 3.902 0 0 1 3 6.9v-4a.9.9 0 0 1 .9-.9Z" fill="currentColor"></path></svg>
    )
}

const SneakerIcon: React.FC<Items> = ({className}) => {
    return (
        <svg viewBox="0 0 24 25" fill="none" className={className} xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M22.28 16.61c-.39-.3-2.22-1.5-3-2.01L17.3 6.19a.995.995 0 0 0-1.2-.74c-.54.13-.87.67-.74 1.2l.59 2.48-2.55.62c-.54.13-.87.67-.73 1.21a.992.992 0 0 0 1.21.73l2.52-.62.22.94-2.55.62c-.54.13-.87.67-.73 1.21a.992.992 0 0 0 1.21.73l2.53-.62.35 1.48c.06.25.21.47.43.61 1.08.7 2.9 1.9 3.17 2.1.06.08.13.37.14.53l.01 1.78c-.08.05-.35.08-.54.06-.05-.01-.08 0-.14-.01-.04 0-4.29.03-5.9-.03-1.14-.05-1.8-.85-1.82-.88-.03-.04-.06-.07-.09-.11l-8.84-8.7c-.32-.6-.03-1.08.04-1.18.33-.41.25-1.03-.19-1.36a1 1 0 0 0-1.4.17c-.47.61-1.02 2.04-.09 3.54.04.07.09.13.14.18l8.9 8.76c.26.31 1.4 1.51 3.26 1.59 1.57.07 5.4.04 5.94.04.08.01.19.01.32.01.45 0 1.17-.09 1.71-.56.29-.26.64-.72.64-1.45l.03-1.85c0-.33-.1-1.47-.87-2.06Z"></path><path d="M7.43 10.77c.38.54 1.3 1.93 1.63 2.77a.99.99 0 0 0 1.29.57c.52-.2.77-.78.58-1.29-.5-1.3-1.86-3.21-1.92-3.29-.03-.04-.07-.08-.11-.12L6.28 6.79l2.58-2.48c.12-.11.31-.08.5.04l.82.66-.18.45c-.27.57-.53 1.78.24 2.7a1 1 0 1 0 1.53-1.29c-.1-.12-.02-.44.05-.59l.49-1.2c.17-.41.05-.88-.3-1.16l-1.47-1.18c-1.36-.91-2.6-.39-3.14.21l-3.24 3.1c-.19.19-.31.44-.31.71 0 .27.1.53.29.72l3.29 3.29ZM6.77 18.39c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1h3.77c.55 0 1-.45 1-1ZM8.76 20.35H4.99c-.55 0-1 .45-1 1s.45 1 1 1h3.77c.55 0 1-.45 1-1s-.45-1-1-1Z"></path></g></svg>
    )
}

const CultureIcon: React.FC<Items> = ({className}) => {
    return (
        <svg className={className} viewBox="0 0 23 24" fill="none" style={{display: 'block', height: '5vh', width: '5vw'}}  xmlns="http://www.w3.org/2000/svg"><path d="m21.4 6.258-.02-.01a16.127 16.127 0 0 0-6.496-1.952c-.03-.06-.06-.13-.09-.19l-.99-2.232A3.214 3.214 0 0 0 11.792.073a.964.964 0 0 0-.97.22C9.42 1.543 7.688 2.625 5.796 3.385a17.244 17.244 0 0 1-4.704 1.171c-.36.04-.67.26-.82.6-.35.821-.36 1.752-.01 2.563l2.432 5.554c.89 2.092 3.442 3.203 5.574 3.583.12.21.25.41.37.59 1.301 1.862 3.273 3.353 4.814 3.624.21.04.44.05.68.05 2.773 0 7.217-2.402 7.797-5.555l1.03-5.945c.221-1.33-.4-2.692-1.56-3.362ZM7.388 14.584c-1.27-.42-2.452-1.14-2.862-2.101L2.094 6.918c-.06-.14-.09-.3-.09-.45a19.12 19.12 0 0 0 4.544-1.221c1.881-.76 3.633-1.802 5.094-3.033.14.12.26.27.33.45l.7 1.602-.43.03c-.18.01-.37.03-.56.07h-.03l-.18.02c-.15.02-.29.03-.43.05-1.332.2-2.393 1.241-2.633 2.612l-1.02 5.975v.03c-.04.23-.06.46-.06.68 0 .07.01.14.01.2.01.181.02.361.05.541-.01.04-.01.07 0 .11ZM20.98 9.27l-1.03 5.935c-.42 2.292-4.574 4.153-6.156 3.883-.86-.15-2.441-1.261-3.512-2.792-.19-.27-.34-.53-.48-.79v-.01c-.01-.03-.02-.05-.03-.08-.1-.201-.18-.401-.24-.591-.03-.08-.04-.15-.07-.22-.041-.16-.081-.31-.101-.461a2.84 2.84 0 0 1 0-.77l1.03-5.975c.09-.51.481-.911.962-.981.12-.02.25-.03.37-.04l.22-.02c.36-.06.72-.07 1.06-.08.201-.01.391-.01.581-.03h.02c2.362 0 4.684.59 6.796 1.751.44.25.67.76.58 1.271Z" fill="currentColor"></path><path d="M12.002 14.011c.769 2.187 3.653 2.625 5 1.094" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.985 9.224a1.082 1.082 0 0 0-1.271.846 1.082 1.082 0 0 0 .846 1.272 1.088 1.088 0 0 0 1.272-.847 1.082 1.082 0 0 0-.847-1.271ZM6.044 7.594a1.082 1.082 0 0 0-.579 1.413c.232.554.87.807 1.414.58.544-.228.807-.87.579-1.414a1.082 1.082 0 0 0-1.414-.579ZM18.064 10.298a1.082 1.082 0 0 0-1.271.847 1.082 1.082 0 0 0 .847 1.271 1.082 1.082 0 0 0 1.279-.835 1.092 1.092 0 0 0-.855-1.283Z" fill="currentColor"></path></svg>
    )
}

const WellnessIcon: React.FC<Items> = ({className}) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className}`} style={{display: 'block', height: '100%', width: '100%'}} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#lotus-a)">
          <g clipPath="url(#lotus-b)">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.11 5.412c-.914.994-2.114 2.376-3.168 3.842l-.003.004c-.699.96-1.303 1.917-1.728 2.796-.435.909-.601 1.568-.601 1.966a5.5 5.5 0 1 0 11 0c0-.403-.16-1.064-.598-1.96l-.002-.004c-.426-.88-1.03-1.837-1.729-2.798v-.001c-1.064-1.468-2.261-2.852-3.172-3.845Zm-1.45-1.379a1.968 1.968 0 0 1 2.9.002c.379.412.81.895 1.263 1.426a52.89 52.89 0 0 1 2.472-1.475 1.966 1.966 0 0 1 2.754.908c.574 1.268 1.322 3.044 1.913 4.88l.001.004c.378 1.197.697 2.418.848 3.539v.002c.148 1.12.137 2.141-.12 2.937l-.001.007a7.502 7.502 0 0 1-8.636 5.002 7.512 7.512 0 0 1-1.944.255c-.715 0-1.407-.1-2.062-.287a7.502 7.502 0 0 1-8.828-4.96l-.002-.006c-.257-.797-.268-1.818-.12-2.938v-.001c.151-1.131.47-2.353.848-3.55.585-1.84 1.333-3.62 1.912-4.89a1.966 1.966 0 0 1 2.754-.899c.761.428 1.694.977 2.67 1.602.495-.583.967-1.111 1.378-1.558ZM8.013 7.155a52.5 52.5 0 0 0-2.35-1.405c-.558 1.226-1.264 2.911-1.81 4.632-.362 1.143-.643 2.241-.772 3.21-.132.997-.083 1.674.04 2.059a5.496 5.496 0 0 0 3.528 3.51 7.474 7.474 0 0 1-2.04-5.141c0-.841.315-1.822.8-2.832v-.004c.495-1.02 1.17-2.082 1.91-3.1.227-.315.46-.626.694-.93Zm8.886.928a36.83 36.83 0 0 0-.8-1.063c.778-.488 1.517-.92 2.142-1.271.555 1.228 1.262 2.914 1.816 4.635.361 1.143.642 2.24.771 3.198.132.997.084 1.674-.04 2.059a5.49 5.49 0 0 1-3.04 3.326 7.472 7.472 0 0 0 1.862-4.947c0-.837-.3-1.815-.801-2.838-.494-1.02-1.17-2.081-1.91-3.1Z" fill="currentColor"></path>
          </g>
        </g>
        <defs>
          <clipPath id="lotus-a">
            <path fill="#fff" transform="translate(0 .5)" d="M0 0h24v24H0z"></path>
          </clipPath>
          <clipPath id="lotus-b">
            <path fill="currentColor" transform="translate(1 2.5)" d="M0 0h21.9v19.02H0z"></path>
          </clipPath>
        </defs>
      </svg>
    )
}



export {UserIconX, WalletIcon, KnifeAndForkIcon, SneakerIcon, CultureIcon, WellnessIcon};