import { Button } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export const GitHubButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  return (
    <Button onClick={() => signIn("github", {
      callbackUrl
    })}
      _hover={{ color: 'white', backgroundColor: 'primary' }}
      fontWeight={'700'}
    >
      Sign in with GitHub
    </Button>
  )
}
