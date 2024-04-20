export default function Profile({ user }: any) {
  console.log(user);
  return user.name ? (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  ) : (
    ""
  );
}
