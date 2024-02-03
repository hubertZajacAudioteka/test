'use client'

import Script from "next/script";


const WPJsLib = () => {
  return (
    <Script dangerouslySetInnerHTML={{
        __html: `
        var wp_pp_gemius_identifier = 'coWacc7R.xHk.xzhRC.LgpQJ38OGWzuyOAxvi8UATAr.s7';
        var wp_sn = 'sg';
        var rekid = '7757';
        var wp_dot_type = 'click';`
    }} />

  )
}

export default WPJsLib