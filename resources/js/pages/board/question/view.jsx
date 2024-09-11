import Layout from "@/components/Layout";
import dayjs from "@/libs/dayjs";
import { Link } from "@inertiajs/react";

export default function ({ auth, question }) {
    const confirmDelete = (e) => {
        return confirm("정말로 삭제하시겠습니까?");
    };

    return (
        <Layout user={auth.user}>
            <h2 className="border-bottom py-2">{question.subject}</h2>

            <div className="card my-3">
                <div className="card-body">
                    <div
                        className="card-text"
                        style={{ whiteSpace: "pre-line" }}
                    >
                        {question.content}
                    </div>
                    <div className="d-flex justify-content-end">
                        {question.updated_at > question.created_at && (
                            <div className="badge bg-light text-dark p-2 text-start mx-3">
                                <div className="mb-2">modified at</div>
                                <div>
                                    {dayjs(question.updated_at).fromNow()}
                                </div>
                            </div>
                        )}
                        <div className="badge bg-light text-dark p-2 text-start">
                            <div className="mb-2">{question.user.name}</div>
                            <div>{dayjs(question.created_at).fromNow()}</div>
                        </div>
                    </div>
                    {question.user_id === auth.user.id && (
                        <div className="my-3">
                            <Link
                                href={route("board.question.edit", question.id)}
                                className="btn btn-sm btn-outline-secondary mx-1"
                            >
                                수정
                            </Link>
                            <Link
                                className="btn btn-sm btn-outline-danger mx-1"
                                href={route(
                                    "board.question.delete",
                                    question.id
                                )}
                                as="button"
                                method="delete"
                                onClick={confirmDelete}
                            >
                                삭제
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <Link
                href={route("board.question.list")}
                className="btn btn-secondary"
            >
                목록으로
            </Link>
        </Layout>
    );
}
