import { useNavigate } from "react-router";
import { authClient } from "~/lib/auth-client";

export default function LogOut() {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      await authClient.signOut();
    } finally {
      navigate("/", { replace: true });
    }
  }

  return (
    <button type="button" onClick={handleClick}>
      Log Out
    </button>
  );
}
