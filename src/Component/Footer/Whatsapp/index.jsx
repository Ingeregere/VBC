import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
// import Icon from './ingeregere.png'

export default function WhatsappChat() { 
 
	return (
		<FloatingWhatsApp
			phoneNumber={'+25769205767'} 
			accountName={'VBC'}
			// avatar={Icon}
			statusMessage={'Pastor Roger En ligne'}
			chatMessage={'Bonjour ! Est-ce-que je peux vous aider?'}
			notification={true}
			notificationSound={true}
		/>
	)
}