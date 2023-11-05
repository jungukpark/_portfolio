$(function () {

    // .btn_top을 500px 도달시 나타남
    // window -> 브라우저 창을 의미함 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
            // 안보이던 화살표 버튼이 500px 이상으로 스크롤이 내려오면 나타남
        } else {
            $(".btn_top").fadeOut(); // 500px 이하일 경우 사라짐
        }
    });

    // .logo와 .btn_top 클릭시 최상단으로 가게 하기
    // 로고와 화살표를 클릭했을때 최상단(TOP:0)으로 위치 
    $(".logo, .btn_top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 400); //0.4초
    });



    // 각 메뉴 클릭시 스크롤 이벤트 처리 

    // 1. 메뉴와 라인 색변경
	
    // 스크롤 이벤트 핸들러 등록 
    $(window).scroll(function () {
        // 현재의 스크롤 위치 가져옴
        var height = $(document).scrollTop();

        // 스크롤의 위치에 따라 활성화 되는 클래스를 추가 또는 제거함

        // 모든 메뉴 항목에서 active 클래스 제거
        $(".header_main>ul>li").removeClass("active");

        // 만약, 스크롤의 위치가 0~1300px 사이에 있다면,
        if (height >= 0 && height <= 1300) { // 0으로 수정 - ★
            // 첫 번째 메뉴에 active 클래스 추가
            $(".header_main>ul>li:nth-child(1)").addClass("active");
        }
        // 만약, 스크롤의 위치가 1344~4500px 사이에 있다면,
        else if (height >= 1301 && height <= 4500) {
            // 두 번째 메뉴에 active 클래스 추가
            $(".header_main>ul>li:nth-child(2)").addClass("active");
        }
     
		// 만약, 스크롤의 위치가 4501px 이상이라면,
         else if (height >= 4501) {
        // 세 번째 메뉴에 active 클래스 추가
        $(".header_main>ul>li:nth-child(3)").addClass("active");
    }
    });

	//  다른 영역을 클릭 시 active 제거 (★ 추가 23.10.03)
	$(document).on("click", function (e) {
		if (!$(e.target).closest("ul.nav li").length) {
			// 클릭한 영역이 메뉴 항목 이외의 영역이면
			$("ul.nav li").removeClass("active"); // 모든 메뉴 항목에서 active 클래스 제거
		}
	});
		
	

    // removeClass - 삭제
    // addClass - 추가
    // && = 그리고 (and)


    // 2. 각 메뉴 클릭시 각 영역으로 이동 

// ABOUT 메뉴 클릭시 해당 위치로 이동 
    $(".header_main>ul>li:nth-child(1)").on("click", function () {



        // 선택한 메뉴에 해당하는  About 섹션의 위치정보 가져옴
        var about = $("#skill").position();
        // <section id="skill">
        // 스크롤 애니메이션을 사용하여 선택한 섹션을 스크롤
        //  about.top - 80 위치로 스크롤시킴. 
        // - 80이라고 하는 이유는 상단메뉴 고려된것임
        $("html,body").animate({
            scrollTop: about.top - 80
        }, 400);

        // 메뉴 활성화 클래스 추가, 이전 활성화 클래스 제거
        $(".header_menu>ul>li").removeClass("active"); // 모든 메뉴에서 active클래스제거
        $(this).addClass("active"); // 현재 클릭한 메뉴 항목에 active 클래스 추가
        // this => li:nth-child(1) 


    });



    // portfolio 메뉴 클릭시 해당 위치로 이동 

$(".header_main>ul>li:nth-child(2)").on("click", function () {
    // 선택한 메뉴에 해당하는 "portfolio" 섹션의 위치 정보를 가져옴
    var portfolio = $("#portfolio").offset().top;

    // 스크롤 애니메이션을 사용하여 선택한 섹션으로 스크롤
    // "portfolio" 섹션의 상단으로 스크롤
    $("html,body").animate({
        scrollTop: portfolio
    }, 400); // 400ms 동안 스크롤 애니메이션을 수행

    // 현재 메뉴 항목에 "active" 클래스를 추가하여 활성화 표시하고,
    // 이전에 활성화된 메뉴 항목에서 "active" 클래스를 제거
    $(".header_main>ul>li").removeClass("active"); // 모든 메뉴 항목에서 active 클래스를 제거
    $(this).addClass("active"); // 현재 클릭한 메뉴 항목에 active 클래스를 추가하여 활성화 표시
});



    // 기타디자인 etc
    $(".header_main>ul>li:nth-child(3)").on("click", function () {
        var etc = $("#etc").position();
        $("html,body").animate({
            scrollTop: etc.top - 40
        }, 400);
        $(".header_main>ul>li").removeClass("active");
        $(this).addClass("active");
    });







    // .position(); - 부모 요소를 기준으로 한 상대적인 위치값 가져옴 
    // Portfolio 메뉴 클릭시 해당 위치로 이동 
    // (top,left로 x,y) 좌표값으로 위치이동

    // Other Design 메뉴 클릭시 해당 위치로 이동 




    // .on() - 이벤트 등록 메서드 


    // 슬라이드 팝업 
    // etc_1

    // 썸네일 배경 클릭시 배경, 이미지, 좌우화살표 나타남
    $(".etc_1").on("click", function (e) {
        e.preventDefault(); // 링크차단메서드
        $(".bg").fadeIn();
        $(".popup1").fadeIn();
        $(".popup1>button").fadeIn();
    });
    // 이미지에 마우스가 들어왔을때 버튼 나타남
    $(".popup1").mouseenter(function () {
        $(".popup1>button").fadeIn();
    });
    // 이미지에 마우스가 벗어났을때 버튼 사라짐
    $(".popup1").mouseleave(function () {
        $(".popup1>button").fadeOut();
    });

    // 이미지 클릭시 팝업창 사라짐 
    $(".popup1>.popList>.popImg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup1").fadeOut();
        $(".popup1>button").fadeOut();
        history.go(0);
        // history.go(0); -> 브라우저히스토리조작 
        // (현재 페이지 새로고침 역할)
        // 클릭시 배경 등을 숨기고 팝업창도 숨긴 다음 
        // 현재 페이지를 다시 로드하여 새로고침 역할을 함
        // 모달창 닫을때 주로 사용됨
    });


    // bg 클릭시 팝업창 사라짐 
    $(".bg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup1").fadeOut();
        $(".popup1>button").fadeOut();
        history.go(0);
    });


    // etc_2
    // 썸네일 배경 클릭시 배경, 이미지, 좌우화살표 나타남
    $(".etc_2").on("click", function (e) {
        e.preventDefault(); // 링크차단메서드
        $(".bg").fadeIn();
        $(".popup2").fadeIn();
        $(".popup2>button").fadeIn();
    });
    // 이미지에 마우스가 들어왔을때 버튼 나타남
    $(".popup2").mouseenter(function () {
        $(".popup2>button").fadeIn();
    });
    // 이미지에 마우스가 벗어났을때 버튼 사라짐
    $(".popup2").mouseleave(function () {
        $(".popup2>button").fadeOut();
    });

    // 이미지 클릭시 팝업창 사라짐 
    $(".popup2>.popList>.popImg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup2").fadeOut();
        $(".popup2>button").fadeOut();
        history.go(0);
        // history.go(0); -> 브라우저히스토리조작 
        // (현재 페이지 새로고침 역할)
        // 클릭시 배경 등을 숨기고 팝업창도 숨긴 다음 
        // 현재 페이지를 다시 로드하여 새로고침 역할을 함
        // 모달창 닫을때 주로 사용됨
    });


    // bg 클릭시 팝업창 사라짐 
    $(".bg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup2").fadeOut();
        $(".popup2>button").fadeOut();
        history.go(0);
    });


    // etc_3
    // 썸네일 배경 클릭시 배경, 이미지, 좌우화살표 나타남
    $(".etc_3").on("click", function (e) {
        e.preventDefault(); // 링크차단메서드
        $(".bg").fadeIn();
        $(".popup3").fadeIn();
        $(".popup3>button").fadeIn();
    });
    // 이미지에 마우스가 들어왔을때 버튼 나타남
    $(".popup3").mouseenter(function () {
        $(".popup3>button").fadeIn();
    });
    // 이미지에 마우스가 벗어났을때 버튼 사라짐
    $(".popup3").mouseleave(function () {
        $(".popup3>button").fadeOut();
    });

    // 이미지 클릭시 팝업창 사라짐 
    $(".popup3>.popList>.popImg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup3").fadeOut();
        $(".popup3>button").fadeOut();
        history.go(0);
        // history.go(0); -> 브라우저히스토리조작 
        // (현재 페이지 새로고침 역할)
        // 클릭시 배경 등을 숨기고 팝업창도 숨긴 다음 
        // 현재 페이지를 다시 로드하여 새로고침 역할을 함
        // 모달창 닫을때 주로 사용됨
    });


    // bg 클릭시 팝업창 사라짐 
    $(".bg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup3").fadeOut();
        $(".popup3>button").fadeOut();
        history.go(0);
    });


    // etc_4
    // 썸네일 배경 클릭시 배경, 이미지, 좌우화살표 나타남
    $(".etc_4").on("click", function (e) {
        e.preventDefault(); // 링크차단메서드
        $(".bg").fadeIn();
        $(".popup4").fadeIn();
        $(".popup4>button").fadeIn();
    });
    // 이미지에 마우스가 들어왔을때 버튼 나타남
    $(".popup4").mouseenter(function () {
        $(".popup4>button").fadeIn();
    });
    // 이미지에 마우스가 벗어났을때 버튼 사라짐
    $(".popup4").mouseleave(function () {
        $(".popup4>button").fadeOut();
    });

    // 이미지 클릭시 팝업창 사라짐 
    $(".popup4>.popList>.popImg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup4").fadeOut();
        $(".popup4>button").fadeOut();
        history.go(0);
        // history.go(0); -> 브라우저히스토리조작 
        // (현재 페이지 새로고침 역할)
        // 클릭시 배경 등을 숨기고 팝업창도 숨긴 다음 
        // 현재 페이지를 다시 로드하여 새로고침 역할을 함
        // 모달창 닫을때 주로 사용됨
    });


    // bg 클릭시 팝업창 사라짐 
    $(".bg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup4").fadeOut();
        $(".popup4>button").fadeOut();
        history.go(0);
    });


    // etc_5
    // 썸네일 배경 클릭시 배경, 이미지, 좌우화살표 나타남
    $(".etc_5").on("click", function (e) {
        e.preventDefault(); // 링크차단메서드
        $(".bg").fadeIn();
        $(".popup5").fadeIn();
        $(".popup5>button").fadeIn();
    });
    // 이미지에 마우스가 들어왔을때 버튼 나타남
    $(".popup5").mouseenter(function () {
        $(".popup5>button").fadeIn();
    });
    // 이미지에 마우스가 벗어났을때 버튼 사라짐
    $(".popup5").mouseleave(function () {
        $(".popup5>button").fadeOut();
    });

    // 이미지 클릭시 팝업창 사라짐 
    $(".popup5>.popList>.popImg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup5").fadeOut();
        $(".popup5>button").fadeOut();
        history.go(0);
        // history.go(0); -> 브라우저히스토리조작 
        // (현재 페이지 새로고침 역할)
        // 클릭시 배경 등을 숨기고 팝업창도 숨긴 다음 
        // 현재 페이지를 다시 로드하여 새로고침 역할을 함
        // 모달창 닫을때 주로 사용됨
    });


    // bg 클릭시 팝업창 사라짐 
    $(".bg").on("click", function () {
        $(".bg").fadeOut();
        $(".popup5").fadeOut();
        $(".popup5>button").fadeOut();
        history.go(0);
    });


    // popup slide

    // 슬라이더 이미지 개수를 저장하는 변수 
    var max = 0;

    // 현재 표시된 이미지의 인덱스를 저장하는 변수 
    var current = 0;

    //  슬라이드 컨테이너 요소를 저장하는 변수 
    var container;

    // 이미지 슬라이드를 애니메이션으로 제어하는 함수 
    function animate($direction) {
        // 방향에 따라 다음이나 이전으로 이동 
        if ($direction == "next") { // 만약, 방향이 next이면,
            // == 비교연산자 (두 값이 서로 같은지 비교하는 역할)
            // 다음 이미지(두번째자식 : 1 )를 오른쪽으로 800px 이동시킴
            $(container.children()[1]).css('margin-left', '800px');
            // 첫번째 이미지를 컨테이너의 마지막으로 이동시킴 
            container.append(container.children()[0]);
            // TweenMax를 사용하여 첫번째 이미지의 
            // marginLeft  속성을 0으로 애니메이션화 함
            // 이로써 이미지가 화면으로 슬라이드 되는 효과를 만들어줌
            TweenMax.to(container.children()[0], 0.8, {
                marginLeft: 0, // 왼쪽으로 이동
                ease: Expo.easeOut // 애니메이션 효과 설정
            });
        } else if ($direction == "prev") {
            // 만약 방향이 "prev" 이면, 
            // 마지막 이미지 (인덱스 max -1) 를 컨테이너의 첫번째 자식으로 이동
            container.prepend(container.children()[max - 1]);
            // 첫번째 이미지를 오른쪽으로 800px 이동 
            $(container.children()[0]).css('margin-left', '800px');
            // TweenMax 사용하여 첫번째 이미지의  
            // marginLift  속성을 0으로 애니메이션화 하기
            // 이로써 이미지가 화면으로 슬라이드됨 
            TweenMax.to(container.children()[0], 0.8, {
                marginLeft: 0, // 왼쪽으로 이동
                ease: Expo.easeOut // 애니메이션 효과 설정
            });
        }
    }
    // .find() - 후손 (찾기) 
    // .children() - 자식 (찾기) 
    // .append() - 선택한 요소의 마지막 자식에 새로운 요소나 내용을 추가하는 역할
    // .prepend() - 선택한 요소의 시작(첫번째 자식)에 새로운 요소나 내용 추가하는 역할


    // 팝업 이전, 다음버튼
    // 이전 버튼 클릭시 호출하는 함수 
    // 현재의 슬라이드 인덱스 감소시킴

    function prev() {
        current--;
        // 현재의 슬라이드 인덱스가 음수이면, 마지막 슬라이드로 이동 
        if (current < 0) {
            current = max - 1;
        }
        // prev 애니메이션을 실행하는 함수 호출 
        animate("prev");
    }
    // 다음 버튼 클릭시 호출하는 함수 
    // 현재의 슬라이드 인덱스 증가시킴
    function next() {
        current++;
        // 현재의 슬라이드 인덱스가 최대 인덱스를 초과하면, 첫번째 슬라이드로 이동 
        if (current > max - 1) {
            current = 0;
        }
        // prev 애니메이션을 실행하는 함수 호출 
        animate("next");
    }


    // 이전, 다음버튼 이벤트 
    // prev 버튼 클릭시 이벤트 핸들러 
    $('#popup>.popup_main>.popup>button.prev').on('click', function () {
        // 현재 버튼을 클릭한 팝업 컨테이너 찾기
        container = $(this).parent(".popup").find(".popList");
        // 팝업 컨테이너 내부의 요소 갯수 가져옴
        max = container.children().length;
        // margin-left 클래스에 -800px값을 추가
        // css 스타일 적용
        container.addClass('margin-left', '-800px');
        // 팝업 컨테이너의 마지막 자식 요소를 처음으로 이동시킴
        container.prepend(container.children()[max - 1]);
        // prev() 함수 호출 정의
        prev();
    });

    // 이전, 다음버튼 이벤트 
    // next 버튼 클릭시 이벤트 핸들러 
    $('#popup>.popup_main>.popup>button.next').on('click', function () {
        // 현재 버튼을 클릭한 팝업 컨테이너 찾기
        container = $(this).parent(".popup").find(".popList");
        // 팝업 컨테이너 내부의 요소 갯수 가져옴
        max = container.children().length;
        // margin-left 클래스에 -800px값을 추가
        // css 스타일 적용
        container.addClass('margin-left', '-800px');
        // 팝업 컨테이너의 첫번째 자식 요소를 마지막으로 이동시킴
        container.append(container.children()[max - 1]);
        // next() 함수 호출 정의
        next();
    });

    // .parent() - 부모 요소 선택 
    // .length - 요소의 개수를 반환하는 속성 



});