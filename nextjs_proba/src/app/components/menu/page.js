import Link from "next/link";

export default function Menu(){

    return (
        <div className="navbar bg-red-200 shadow-sm">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">NextJS</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/components/kutyak">Kutyák</Link></li>
            <li><Link href="/components/autotulajok">Autó tulajok</Link></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    )
}