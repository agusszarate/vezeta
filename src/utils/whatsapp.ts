import { translations } from './translations'

export function sendMessage(language: string): void {
    const whatsappMessage = translations[language].whatsappMessage

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${
        import.meta.env.VITE_PHONE_NUMBER
    }&text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
}
