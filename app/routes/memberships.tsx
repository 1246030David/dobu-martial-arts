import type { LoaderArgs } from "@remix-run/node";
import MembershipCard from "~/components/MembershipCard/";
import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return null;
};

export default function Memberships() {
  return (
    <div className="min-h-screen bg-yellow-100 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Membership Page
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <MembershipCard
          level="Basic"
          description="1 martial art - 2 sessions per week. Monthly fee."
          price="£25.00"
        />
        <MembershipCard
          level="Intermediate"
          description="1 martial art - 3 sessions per week. Monthly fee."
          price="£35.00"
        />
        <MembershipCard
          level="Advanced"
          description="any 2 martial arts - 5 sessions per week. Monthly fee."
          price="£45.00"
        />
      </ul>
    </div>
  );
}