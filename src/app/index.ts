import { refreshTokenResponse } from '../shared/api/oauth/authRequest'

export async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({ url: 'app.html' })
  })
}
export const grabToken = async () => {
  const tokenPlace = document.getElementById('token')
  console.log(tokenPlace)
  const clientId = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET
  const redirectUri = import.meta.env.VITE_REDIRECT_URL
  const queryParameters = new URLSearchParams(window.location.search)
  const code = queryParameters.get('code')

  if (code) {
    await refreshTokenResponse({
      clientId: clientId,
      clientSecret: clientSecret,
      code: code,
      redirectUrl: redirectUri,
    })
      .then(response => {
        tokenPlace!.innerText = `Copy this token: ${response.access_token}`
        navigator.clipboard.writeText(response.access_token)
        alert('Token had copied into clipboard: ' + response.access_token)
        localStorage.setItem('token', response.access_token)
      })
      .catch(error => {
        console.log(error, 'error')
      })
  }
}

init()
grabToken()
