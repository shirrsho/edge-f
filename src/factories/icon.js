'use client'
import UilBellSchool from '@iconscout/react-unicons/icons/uil-users-alt'
import React from 'react'
import { useState } from 'react'

function Icon({ icon='', color='#555', onClick=null, size=24 }) {

    const [_color, set_Color] = useState(color)

    if (icon==='edit') {
        return(
            <div
                onClick={onClick}
                onMouseOver={()=>set_Color('green')}
                onMouseLeave={()=>set_Color('#555')}>
                    {/* <UilEditAlt color={_color}/> */}
                    {React.createElement('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: size,
                        height: size,
                        viewBox: '0 0 24 24',
                        fill: color,
                    }, React.createElement('path', {
                        d: 'M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
                    }))}
            </div>
        )
    }
    if (icon==='delete') {
        return(
            <div
                onClick={onClick}
                onMouseOver={()=>set_Color('red')}
                onMouseLeave={()=>set_Color('#555')}>
                    {/* <UilTrash color={toString(_color)}/> */}
                    {React.createElement('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: size,
                        height: size,
                        viewBox: '0 0 24 24',
                        fill: _color
                    }, React.createElement('path', {
                        d: 'M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z'
                    }))}
            </div>
        )
    }
    if (icon==='search') {
        return(
            <div 
                onClick={onClick}
                onMouseOver={()=>set_Color('black')}
                onMouseLeave={()=>set_Color('#555')}
                className='hover:cursor-pointer'>
                    {/* <UilSearch color={toString(_color)}/> */}
                    {React.createElement('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: size,
                        height: size,
                        viewBox: '0 0 24 24',
                        fill: _color,
                    }, React.createElement('path', {
                        d: 'M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z'
                    }))}
            </div>
        )
    }
    if (icon==='execute') {
        return(
            <div
                onClick={onClick}
                onMouseOver={()=>set_Color('black')}
                onMouseLeave={()=>set_Color('#555')}
                className='hover:cursor-pointer'>
                    {/* <UilProcess color={toString(_color)}/> */}
                    {React.createElement('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: size,
                        height: size,
                        viewBox: '0 0 24 24',
                        fill: _color,
                    }, React.createElement('path', {
                        d: 'M6.9917,14.502a.99974.99974,0,0,0-1,1v1.78229a7.97243,7.97243,0,0,1-2-5.28229,7.29085,7.29085,0,0,1,.05273-.87988.99992.99992,0,1,0-1.98535-.24023A9.17334,9.17334,0,0,0,1.9917,12.002a9.96434,9.96434,0,0,0,2.41687,6.5H2.9917a1,1,0,1,0,0,2h4a.98173.98173,0,0,0,.79413-.42181c.01166-.01538.02655-.0268.03741-.043.00666-.00995.00684-.02173.01306-.03186a.96576.96576,0,0,0,.106-.2583.95234.95234,0,0,0,.03143-.15589c.00287-.03088.018-.05749.018-.08911v-4A.99974.99974,0,0,0,6.9917,14.502Zm1.5-8.5H6.70923a7.9737,7.9737,0,0,1,5.28247-2,7.07475,7.07475,0,0,1,.87939.05274,1.00046,1.00046,0,0,0,.24121-1.98633A9.22717,9.22717,0,0,0,11.9917,2.002a9.96421,9.96421,0,0,0-6.5,2.41669V3.002a1,1,0,0,0-2,0v4a.95355.95355,0,0,0,.03931.19471l.00024.00122a.96893.96893,0,0,0,.14117.345l.01142.0169a.97291.97291,0,0,0,.2445.24634c.01093.008.01636.02026.02771.02789.01429.00946.03046.01246.04505.02112a.95817.95817,0,0,0,.17932.084.98784.98784,0,0,0,.26184.05285c.01733.00092.03192.01.04944.01h4a1,1,0,0,0,0-2ZM20.45215,16.80609a.96745.96745,0,0,0-.14124-.34509l-.01129-.01679a.97315.97315,0,0,0-.24469-.24646c-.01092-.00793-.01629-.02026-.02759-.02783-.0108-.00714-.02362-.00738-.0346-.0141a1.15354,1.15354,0,0,0-.40973-.13543c-.03162-.003-.0589-.01844-.09131-.01844h-4a1,1,0,0,0,0,2h1.78241a7.97338,7.97338,0,0,1-5.28241,2,7.07446,7.07446,0,0,1-.8794-.05371,1.00046,1.00046,0,0,0-.24121,1.98633,9.36538,9.36538,0,0,0,1.12061.06738,9.96425,9.96425,0,0,0,6.5-2.41668V21.002a1,1,0,0,0,2,0v-4a.95345.95345,0,0,0-.03931-.1947ZM20.9917,5.502a1,1,0,0,0,0-2h-4a.9519.9519,0,0,0-.19183.0387l-.00666.00134a.96837.96837,0,0,0-.3407.13953l-.01959.01324a.974.974,0,0,0-.2453.24378c-.00787.0108-.02.01611-.02746.02728-.00714.01074-.00739.02344-.0141.03436a1.14563,1.14563,0,0,0-.13636.41266c-.00286.03089-.018.0575-.018.08911v4a1,1,0,1,0,2,0V6.71912a7.97527,7.97527,0,0,1,2,5.28283,7.289,7.289,0,0,1-.05274.87989,1.00106,1.00106,0,0,0,.87208,1.11328,1.02916,1.02916,0,0,0,.12207.00683.99971.99971,0,0,0,.99121-.87988A9.17363,9.17363,0,0,0,21.9917,12.002a9.96411,9.96411,0,0,0-2.417-6.5Z'
                    }))}
            </div>
        )
    }
    if (icon==='agreement') {
        return(
            <div
                onClick={onClick}
                onMouseOver={()=>set_Color('black')}
                onMouseLeave={()=>set_Color('#555')}
                className='hover:cursor-pointer'>
                    {/* <UilNewspaper color={toString(_color)}/> */}
                    {React.createElement('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: size,
                        height: size,
                        viewBox: '0 0 24 24',
                        fill: _color
                    }, React.createElement('path', {
                        d: 'M17,11H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0,4H16a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,9h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2ZM21,3H7A1,1,0,0,0,6,4V7H3A1,1,0,0,0,2,8V18a3,3,0,0,0,3,3H18a4,4,0,0,0,4-4V4A1,1,0,0,0,21,3ZM6,18a1,1,0,0,1-2,0V9H6Zm14-1a2,2,0,0,1-2,2H7.82A3,3,0,0,0,8,18V5H20Zm-9-4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z'
                    }))}
            </div>
        )
    }
    if(icon==='batch'){
        return (
        <div
        onClick={onClick}
        onMouseOver={()=>set_Color('black')}
        onMouseLeave={()=>set_Color('#555')}
        className='hover:cursor-pointer'>
            {/* <UilNewspaper color={toString(_color)}/> */}
            {React.createElement('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                width: size,
                height: size,
                viewBox: '0 0 24 24',
                fill: _color
            }, React.createElement('path', {
                d: 'M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z'
            }))}
          </div>
        );
    }
    else return (
        <></>
  )
}

export default Icon