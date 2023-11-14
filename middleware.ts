import { NextResponse } from 'next/server'
export function middleware(request: { cookies: { get: (arg0: string) => { (): any; new(): any; value: any } }; nextUrl: { clone: () => any } }) {
    let cookie = request.cookies.get('isLogin')?.value
    const urld = request.nextUrl.clone()
    if (urld.pathname = '/login/') {
        if (cookie === undefined) {
            const url = request.nextUrl.clone()
            url.pathname = '/login/'
            return NextResponse.redirect(url)
        } else if (cookie === 'true') {
            const url2 = request.nextUrl.clone()
            url2.pathname = '/dashboard/'
            return NextResponse.redirect(url2)

        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/', "/returncontracts"]
}