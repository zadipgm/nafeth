import { NextResponse } from 'next/server'
export function middleware(request: { cookies: { get: (arg0: string) => { (): any; new(): any; value: any } }; nextUrl: { clone: () => any } }) {
    let cookie = request.cookies.get('isLogin')?.value
    const urld = request.nextUrl.clone()
    console.log("here is path", urld)
    if (urld.pathname = '/login/') {
        if (cookie === undefined) {
            const url = request.nextUrl.clone()
            url.pathname = '/login/'
            return NextResponse.redirect(url)
        } else if (cookie === 'true') {
            return NextResponse.next()

        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/', "/returncontracts"]
}