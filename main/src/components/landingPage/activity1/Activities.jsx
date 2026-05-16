import style from "./Activities.module.css";

const Activities = () => {
  return (
    <main className={style.activities}>
      <h1 className={style.activitiesLabel}>Activities</h1>

      <section className={style.section}>
        {members.map((member) => (
          <div className={style.memHolder}>
            <section
              className={style.isMember}
              data-num={String(member.id).padStart(2, "0")}
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className={style.isMemberImg}
                />
              )}
            </section>
            <figure className={style.info}>
              <p className={style.num}>
                0{member.id} / 0{members.length}
              </p>
              <h3 className={style.name}>{member.name}</h3>
              <p className={style.role}>{member.role}</p>
              <p className={style.bio}>{member.bio}</p>
            </figure>
          </div>
        ))}
      </section>
    </main>
  );
};
