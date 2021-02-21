import Owner from "./Owner";
import Header from "../Header";

export default function Owners(props) {
  return (
    <div className="latestWins">
      <Header
        title={"Owners"}
        style={{ marginBottom: "20px", width: "100%" }}
      ></Header>

      {props.owners && props.owners.length !== 0 ? (
        <div className="owners">
          {props.owners.map((item) => (
            <Owner key={item.id} user={item.nickname}></Owner>
          ))}
        </div>
      ) : (
        <div>Noone redeemed this badge.</div>
      )}
    </div>
  );
}
