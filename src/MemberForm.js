//회원가입
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MemberForm = () => {
  const idRef = useRef(); //아이디
  const pwRef = useRef(); //비밀번호
  const pwchRef = useRef(); //비밀번호 확인
  const nickRef = useRef(); //닉네임
  const addrRef = useRef(); //주소
  const mobile1Ref = useRef(); //휴대폰 -> 앞3자리
  const mobile2Ref = useRef(); //휴대폰 -> 중간4자리
  const mobile3Ref = useRef(); //휴대폰 -> 끝4자리

  
  const navigate = useNavigate();

  const passwordRules =  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;


  const handleMember = () => {
      if (idRef.current.value === ""|| idRef.current.value === undefined) {
          alert("아이디를 입력하세요!!!");
          idRef.current.focus();
          return false;
      }
      if (pwRef.current.value === ""|| pwRef.current.value === undefined) {
        if (pwRef.current.value !== /^[a-zA-Z0-9]/g)
        // if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'z') || (ch >= '0' && ch <= '9'))) {
        //   alert("특수문자포함");
          // alert("비밀번호를 입력하세요!!!");
          pwRef.current.focus();
          return false;
      }
      if (pwchRef.current.value !== pwRef.current.value) {
          alert("비밀번호가 일치하지 않습니다!!!");
          pwchRef.current.focus();
          return false;
      }
      if (nickRef.current.value === ""|| nickRef.current.value === undefined) {ㅔ
          alert("닉네임을 입력하세요!!!");
          nickRef.current.focus();
          return false;
      }
      if (addrRef.current.value === ""|| addrRef.current.value === undefined) {
          alert("주소를 입력하세요!!!");
          addrRef.current.focus();
          return false;
      }
      if (mobile1Ref.current.value === ""|| mobile1Ref.current.value === undefined) {
        alert("휴대폰번호를 입력하세요!!!");
        mobile1Ref.current.focus();
        return false;
    }
  axios // 호출
    .post("http://localhost:8005/member", {
      id: idRef.current.value, //아이디
      pw: pwRef.current.value, //비밀번호
      nickname: nickRef.current.value, //닉네임
      addr: addrRef.current.value, //주소
      mobile1: mobile1Ref.current.value, //휴대폰 ->앞3자리
      mobile2: mobile2Ref.current.value, //휴대폰 ->중간4자리
      mobile3: mobile3Ref.current.value, //휴대폰 ->끝4자리
    })
    .then((res) => {
      console.log("handleMember =>", res);
      if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
      else alert("회원가입 실패!!!");
      navigate("/");
    })
    .then((res) => {
      console.log("handleMember => ", res);
      navigate("/");
    })
    .catch((e) => {
      console.error(e);
    });
};

return (
  <div>
    <form>
      <table border="1" width="300px" align="center">
        {/* 아이디 */}
        <tr>
          <td>ID</td>
          <td>
            <input
            type="text"
            name="id"
            ref={idRef}
            placeholder="아이디를 입력하세요"
            defaultValue=""
            />
          </td>
        </tr>
        {/* 비밀번호 */}
        <tr>
          <td>PW</td>
          <td>
            <input
            type="password"
            name="pw"
            ref={pwRef}
            placeholder="영문+숫자+특수문자 8자리"
            defaultValue=""
            />
          </td>
        </tr>
        {/* 비밀번호 확인 */}
        <tr>
          <td>PWcheck</td>
          <td>
            <input
            type="password"
            name="pwch"
            ref={pwchRef}
            defaultValue=""
            placeholder="비밀번호를 확인해주세요"
            />
          </td>
        </tr>
        {/* 닉네임 */}
        <tr>
          <td>NickName</td>
          <td>
            <input
            type="text"
            name="nickname"
            ref={nickRef}
            placeholder="닉네임을 입력하세요"
            defaultValue=""
            />
          </td>
        </tr>
        {/* 주소 */}
        <tr>
          <td>Addr</td>
          <td>
            <input
            type="text"
            name="addr"
            ref={addrRef}
            placeholder="주소를 입력하세요"
            defaultValue=""
            />
          </td>
        </tr>
        {/* 휴대폰 */}
        <tr>
          <td>Mobile</td>
          <td>
            <input
            type="tel"
            name="mobile1"
            ref={mobile1Ref}
            placeholder="3자리"
            size="3"
            maxLength="3"
            />-
            <input
            type="tel"
            name="mobile2"
            ref={mobile2Ref}
            placeholder="4자리"
            size="4"
            maxLength="4"
            />-
            <input
            type="tel"
            name="mobile3"
            ref={mobile3Ref}
            placeholder="4자리"
            size="4"
            maxLength="4"
            />
          </td>
        </tr>
        {/* 회원등록 */}
        <tr>
          <td colSpan="2" align="center">
            <input
            type="button"
            value="registration"
            onClick={handleMember}
            />
          </td>
        </tr>
      </table>
    </form>
  </div>
)
};



export default MemberForm;