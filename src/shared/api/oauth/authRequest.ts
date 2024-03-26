import { RefreshResponse, RefreshResponsePayload } from './authDataSource'
import axios from 'axios'

export const refreshTokenResponse = async ({
  clientId,
  clientSecret,
  code,
  redirectUrl,
}: RefreshResponsePayload): Promise<RefreshResponse> => {
  return await axios
    .post(
      `https://try.readme.io/https://api.miro.com/v1/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUrl}`
    )
    .then(response => {
      return response.data
    })
}
