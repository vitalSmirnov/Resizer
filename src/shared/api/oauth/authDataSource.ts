export interface RefreshResponsePayload {
  clientId: string
  clientSecret: string
  code: string
  redirectUrl: string
}
export interface RefreshResponse {
  access_token: string
  token_type: string
  scope: string
  user_id: string
  team_id: string
}
