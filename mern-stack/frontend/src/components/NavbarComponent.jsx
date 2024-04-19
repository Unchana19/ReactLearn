import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavbarComponent() {
  const pathname = window.location.pathname;

  return (
    <Navbar className="fixed top-0 bg-slate-950" position="sticky">
      <NavbarBrand>
        <p className="text-white font-bold text-inherit">Blogs</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link href="/" color={pathname === "/" ? "page" : "foreground"} aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/create" color={pathname === "/create" ? "page" : "foreground"} aria-current={pathname === "/create" ? "page" : undefined}>
            Create
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
