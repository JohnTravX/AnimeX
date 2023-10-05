import './App.css';
import FooterComponent from './components/footer';
import Mainpage from './components/mainpage';
import NavbarComponent from './components/navbar';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


function App() {

  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <NavbarComponent />
        <SignedIn>
          <Mainpage />
        </SignedIn>
        <SignedOut>
          <h1>SignedOut bro</h1>
        </SignedOut>
        <FooterComponent />
      </ClerkProvider>
    </>
  )
}

export default App
