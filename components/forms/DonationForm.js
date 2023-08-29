'use client'
import React, { useState } from 'react'

import * as Components from './Components';

function DonationForm() {
    const [signIn, toggle] =useState(true);
    return (
      <Components.Container>
      <Components.SignUpContainer signinIn={signIn}> {/* Corrected typo: SignUpcontainer -> SignUpContainer */}
        <Components.Form>
          <Components.Title>Donation Card</Components.Title>
          <Components.Input type='text' placeholder='Name' />
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='number' placeholder='Amount' />
          <Components.Button>Ready to Donate! </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signinIn={signIn}> {/* Corrected typo: SignIncontainer -> SignInContainer */}
        <Components.Form>
          <Components.Title>Donation Status</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Anchor href='#'>Trouble?</Components.Anchor>
          <Components.Button>Donation</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

          <Components.LeftOverlayPanel signinIn={signIn}> {/* Corrected typo: LeftOverLayPanel -> LeftOverlayPanel */}
            <Components.Title>Thank You!</Components.Title>
            <Components.Paragraph>
              To stay connected with us, please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}> {/* Corrected typo: onclick -> onClick */}
              Ready to Donate
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}> {/* Corrected typo: RightOverLayPane -> RightOverlayPanel */}
            <Components.Title>Hello Friend!</Components.Title>
            <Components.Paragraph>
              Thank you for your valuable donation🙏🏻
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}> {/* Corrected typo: onclick -> onClick */}
              Ready to Donate
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    )
}

export default DonationForm
