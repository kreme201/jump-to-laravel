import BaseLayout from "@/layouts/BaseLayout";
import { Link, useForm } from "@inertiajs/react";
import dayjs from "@/libs/dayjs";

export default function ({ auth, questions, search }) {
    const { data, setData } = useForm({
        search: search || "",
    });

    return (
        <BaseLayout user={auth.user}>
            <div className="row my-3">
                <div className="col-6">
                    <Link
                        href={route("board.question.create")}
                        className="btn btn-primary"
                    >
                        질문 등록하기
                    </Link>
                </div>
                <div className="col-6">
                    <form>
                        <div className="input-group">
                            <input
                                type="search"
                                name="search"
                                className="form-control"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <button
                                type="submit"
                                className="btn btn-outline-secondary"
                            >
                                찾기
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr className="text-center table-dark">
                        <th>번호</th>
                        <th style={{ width: "50%" }}>제목</th>
                        <th>글쓴이</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.data.map((question, idx) => (
                        <tr key={question.id} className="text-center">
                            <td>
                                {questions.total -
                                    (questions.current_page - 1) *
                                        questions.per_page -
                                    idx}
                            </td>
                            <td className="text-start">
                                <Link
                                    href={route(
                                        "board.question.view",
                                        question.id
                                    )}
                                >
                                    {question.subject}
                                </Link>

                                {question.answers_count > 0 && (
                                    <span className="text-danger small mx-2">
                                        {question.answers_count}
                                    </span>
                                )}
                            </td>
                            <td>{question.user.name}</td>
                            <td>{dayjs(question.created_at).fromNow()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ul className="pagination justify-content-center">
                {questions.links.map((link, idx) => (
                    <li
                        key={idx}
                        className={`page-item ${!link.url ? "disabled" : ""}`}
                    >
                        <Link
                            href={link?.url || "#"}
                            className={`page-link ${
                                link.active ? "active" : ""
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    </li>
                ))}
            </ul>
        </BaseLayout>
    );
}
