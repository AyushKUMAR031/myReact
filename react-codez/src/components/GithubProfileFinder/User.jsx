import styles from "./style.module.css";

export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, url, name, login, created_at } = user;

    const createdDate = new Date(created_at);

    return (
        <div className={styles.User}>
            <div>
                <img src={avatar_url} alt="User" className={styles.avatar} />
            </div>
            <div className={styles.name}>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User Joined on {" "} {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', { month: "short" })} ${createdDate.getFullYear()}`}</p>
            </div>
            <div className={styles.userStats}>
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
}