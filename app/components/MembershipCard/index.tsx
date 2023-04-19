interface MembershipCardProps {
  membershipId: string;
  userMembershipId: string | null;
  userId: string;
  level: string;
  description: string;
  price: string;
}

function MembershipCard({
  membershipId,
  userMembershipId,
  userId,
  level,
  description,
  price,
}: MembershipCardProps) {
  return (
    <>
      <label
        htmlFor={membershipId}
        className="mb-4 rounded-lg border-2 border-[#D7883F] bg-[#D7883F] p-4 text-center text-white shadow-lg transition-all hover:scale-105  hover:cursor-pointer hover:bg-white hover:text-[#D7883F] lg:ml-4 lg:w-2/5"
      >
        <input type="hidden" name="userId" value={userId} />
        <input
          id={membershipId}
          type="radio"
          name="memberships"
          value={membershipId}
          defaultChecked={userMembershipId === membershipId}
        />

        <h2 className="mb-4  text-2xl font-bold uppercase tracking-wide  ">
          {level}
        </h2>
        <dl>
          <dt className="bold text-s mb-1  ">What's included:</dt>
          <dd className="mb-3 ">{description}</dd>
          <dt className="bold mb-1 text-xs uppercase ">Price</dt>
          <dd className="mb-3  text-xl font-bold ">{price}</dd>
        </dl>
      </label>
    </>
  );
}

export default MembershipCard;
