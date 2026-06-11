/**
 * MLN131 - Chủ nghĩa xã hội khoa học
 * Dữ liệu tĩnh học tập: 7 Chương học, Timeline Lịch sử, và Sơ đồ tư duy toàn bộ môn học.
 * Phù hợp chương trình giáo trình chuẩn của Bộ Giáo dục và Đào tạo.
 */

const CHAPTERS_DATA = [
    {
        id: 1,
        title: "Nhập môn Chủ nghĩa xã hội khoa học",
        shortTitle: "Nhập môn CNXHKH",
        description: "Giới thiệu sự ra đời, các giai đoạn phát triển, đối tượng, phương pháp và ý nghĩa nghiên cứu của Chủ nghĩa xã hội khoa học.",
        objectives: {
            knowledge: "Hiểu rõ các điều kiện kinh tế - xã hội, tiền đề khoa học tự nhiên và tư tưởng lý luận dẫn đến sự ra đời của CNXHKH; nắm được các giai đoạn phát triển và đối tượng nghiên cứu của môn học.",
            skills: "Phân biệt được sự khác nhau giữa CNXH không tưởng và CNXH khoa học; biết vận dụng phương pháp luận duy vật biện chứng để phân tích các hiện tượng chính trị - xã hội thực tế.",
            attitude: "Hình thành niềm tin khoa học vào mục tiêu, con đường đi lên chủ nghĩa xã hội mà Đảng và nhân dân Việt Nam đang thực hiện."
        },
        sections: [
            {
                title: "Sự ra đời của Chủ nghĩa xã hội khoa học",
                summary: "CNXHKH ra đời vào những năm 40 của thế kỷ XIX, là kết quả tất yếu của sự phát triển kinh tế - xã hội và cuộc đấu tranh của giai cấp vô sản chống giai cấp tư sản, cùng với những phát kiến lý luận vĩ đại của C.Mác và Ph.Ăngghen.",
                keyPoints: [
                    "Điều kiện kinh tế - xã hội: Sự phát triển mạnh mẽ của phương thức sản xuất tư bản chủ nghĩa tạo ra mâu thuẫn sâu sắc giữa lực lượng sản xuất xã hội hóa và quan hệ sản xuất tư hữu tư bản chủ nghĩa.",
                    "Tiền đề khoa học tự nhiên: Học thuyết tế bào, Học thuyết tiến hóa của Darwin, Định luật bảo toàn và chuyển hóa năng lượng cung cấp thế giới quan duy vật biện chứng.",
                    "Tiền đề tư tưởng lý luận trực tiếp: Chủ nghĩa xã hội không tưởng - phê phán Pháp (Saint-Simon, Fourier, Owen) cung cấp những phê phán sâu sắc đối với xã hội tư bản."
                ],
                takeaway: "Sự ra đời của CNXHKH là một tất yếu lịch sử, chuyển hóa chủ nghĩa xã hội từ không tưởng thành khoa học nhờ vào việc phát hiện ra sứ mệnh lịch sử của giai cấp công nhân."
            },
            {
                title: "Các giai đoạn phát triển của Chủ nghĩa xã hội khoa học",
                summary: "Lý luận CNXHKH đã trải qua các thời kỳ phát triển gắn liền với hoạt động lý luận và thực tiễn cách mạng của C.Mác, Ph.Ăngghen, V.I.Lênin và sự phát triển sáng tạo của các Đảng Cộng sản trong thời đại hiện nay.",
                keyPoints: [
                    "Thời kỳ C.Mác và Ph.Ăngghen: Từ Tuyên ngôn của Đảng Cộng sản (1848) đến tổng kết các phong trào cách mạng (Công xã Paris 1871), định hình các nguyên lý cơ bản của cách mạng xã hội.",
                    "Thời kỳ V.I.Lênin: Bảo vệ và phát triển sáng tạo CNXHKH trong điều kiện chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa và lãnh đạo thành công Cách mạng Tháng Mười Nga (1917).",
                    "Thời kỳ sau Lênin đến nay: Giai đoạn thử nghiệm mô hình CNXH ở Đông Âu, Liên Xô và quá trình cải cách, đổi mới sáng tạo ở Việt Nam, Trung Quốc."
                ],
                takeaway: "CNXHKH không phải là một giáo điều bất biến mà là một học thuyết mở, liên tục phát triển và tự hoàn thiện thông qua thực tiễn cách mạng sinh động."
            },
            {
                title: "Đối tượng, phương pháp và ý nghĩa của việc nghiên cứu",
                summary: "Môn học có đối tượng và phương pháp nghiên cứu đặc thù, mang lại ý nghĩa sâu sắc cả về mặt lý luận nhận thức và chỉ đạo hoạt động thực tiễn cách mạng.",
                keyPoints: [
                    "Đối tượng nghiên cứu: Những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
                    "Phương pháp nghiên cứu: Kết hợp lôgích và lịch sử; khảo sát thực tiễn xã hội; so sánh và phân tích hệ thống.",
                    "Ý nghĩa nghiên cứu: Trang bị thế giới quan khoa học, niềm tin cách mạng vững chắc và phương pháp luận đúng đắn để định hướng hành động chính trị."
                ],
                takeaway: "Nghiên cứu CNXHKH giúp sinh viên nhận thức đúng đắn bản chất các sự kiện thời đại và nâng cao bản lĩnh chính trị trong bối cảnh toàn cầu hóa."
            }
        ],
        keyTerms: [
            {
                term: "Chủ nghĩa xã hội khoa học",
                definition: "Học thuyết lý luận giải thích con đường, động lực, lực lượng cách mạng để xóa bỏ chế độ tư bản chủ nghĩa, xây dựng xã hội mới cộng sản chủ nghĩa dựa trên các quy luật xã hội khách quan.",
                memoryHint: "Học thuyết của Mác-Ăngghen chỉ ra con đường khoa học giải phóng giai cấp và nhân loại."
            },
            {
                term: "Chủ nghĩa xã hội không tưởng",
                definition: "Những tư tưởng tiến bộ muốn thay thế chủ nghĩa tư bản bằng một xã hội công bằng hơn, nhưng chưa chỉ ra được quy luật phát triển khách quan và lực lượng xã hội thực hiện cuộc chuyển biến đó.",
                memoryHint: "Mong muốn xã hội tốt đẹp nhưng thiếu phương pháp khoa học và lực lượng cách mạng."
            },
            {
                term: "Tuyên ngôn của Đảng Cộng sản (1848)",
                definition: "Tác phẩm đặt viên đá đầu tiên chính thức đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học do C.Mác và Ph.Ăngghen soạn thảo.",
                memoryHint: "Văn kiện khai sinh ra CNXHKH, xuất bản tháng 2 năm 1848."
            },
            {
                term: "Ba phát kiến vĩ đại của Mác - Ăngghen",
                definition: "Chủ nghĩa duy vật lịch sử, Học thuyết giá trị thặng dư, và Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân.",
                memoryHint: "Nền tảng triết học, kinh tế và chính trị để đưa CNXH từ không tưởng thành khoa học."
            },
            {
                term: "Quy luật chính trị - xã hội",
                definition: "Quy luật khách quan phản ánh mối quan hệ giữa các giai cấp, tầng lớp xã hội trong quá trình giành, giữ và sử dụng quyền lực chính trị nhằm xây dựng xã hội mới.",
                memoryHint: "Quy luật điều chỉnh mối quan hệ giai cấp và quyền lực nhà nước."
            }
        ],
        vietnamConnection: "Tại Việt Nam, Đảng Cộng sản luôn khẳng định chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho mọi hành động. Sự ra đời của CNXHKH là cơ sở lý luận vững chắc để Chủ tịch Hồ Chí Minh tìm ra con đường cứu nước đúng đắn cho dân tộc, chuyển hướng cuộc đấu tranh giải phóng dân tộc gắn liền với giải phóng giai cấp và tiến lên chủ nghĩa xã hội.",
        essayQuestions: [
            "Phân tích những điều kiện kinh tế - xã hội dẫn đến sự ra đời của Chủ nghĩa xã hội khoa học.",
            "Tại sao nói sự xuất hiện của ba phát kiến vĩ đại của C.Mác và Ph.Ăngghen đã biến chủ nghĩa xã hội từ không tưởng thành khoa học?",
            "Nêu ý nghĩa lý luận và thực tiễn của việc học tập, nghiên cứu môn Chủ nghĩa xã hội khoa học đối với sinh viên hiện nay."
        ],
        examTips: [
            "Nhớ mốc thời gian ra đời của tác phẩm Tuyên ngôn của Đảng Cộng sản là tháng 2/1848.",
            "Phân biệt rõ 3 nguồn gốc lý luận trực tiếp: Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa xã hội không tưởng phê phán Pháp.",
            "Lưu ý 3 phát kiến vĩ đại của Marx và Engels, trong đó phát kiến thứ ba trực tiếp hình thành CNXHKH.",
            "Lenin là người có công phát triển lý luận CNXHKH thành hiện thực sinh động qua Cách mạng Tháng Mười Nga.",
            "Đối tượng nghiên cứu của môn là các quy luật chính trị - xã hội (tránh nhầm với quy luật kinh tế hay quy luật triết học chung)."
        ],
        quizzes: [
            {
                question: "Tác phẩm nào đánh dấu sự ra đời chính thức của Chủ nghĩa xã hội khoa học?",
                options: [
                    "Tư bản (Das Kapital)",
                    "Tuyên ngôn của Đảng Cộng sản",
                    "Gia đình thần thánh",
                    "Chống Đuy-rinh"
                ],
                correctAnswer: 1,
                explanation: "Tác phẩm 'Tuyên ngôn của Đảng Cộng sản' xuất bản tháng 2 năm 1848 do C.Mác và Ph.Ăngghen soạn thảo là văn kiện chính thức đánh dấu sự ra đời của CNXHKH."
            },
            {
                question: "Ai là tác giả của ba nguồn gốc lý luận trực tiếp của chủ nghĩa Mác?",
                options: [
                    "Hêghen, Phoiơbắc và Đacuyn",
                    "A.Smith, D.Ricardo và Saint-Simon",
                    "Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa xã hội không tưởng Pháp",
                    "Không tưởng Anh, Không tưởng Pháp, Không tưởng Đức"
                ],
                correctAnswer: 2,
                explanation: "Chủ nghĩa Mác ra đời trên cơ sở tiếp thu có chọn lọc và cải biến cách mạng ba nguồn gốc lý luận trực tiếp: Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh và Chủ nghĩa xã hội không tưởng Pháp."
            },
            {
                question: "Phát kiến vĩ đại nào của C.Mác và Ph.Ăngghen trực tiếp luận giải về mặt chính trị - xã hội sự diệt vong của CNTB và thắng lợi của CNXH?",
                options: [
                    "Chủ nghĩa duy vật lịch sử",
                    "Học thuyết giá trị thặng dư",
                    "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân",
                    "Học thuyết tiến hóa"
                ],
                correctAnswer: 2,
                explanation: "Học thuyết về sứ mệnh lịch sử thế giới của giai cấp công nhân là phát kiến vĩ đại thứ ba, khắc phục hoàn toàn hạn chế của chủ nghĩa xã hội không tưởng và biến CNXH thành một lý luận khoa học."
            },
            {
                question: "V.I.Lênin đã có đóng góp thực tiễn to lớn nào đối với sự phát triển của Chủ nghĩa xã hội khoa học?",
                options: [
                    "Soạn thảo Tuyên ngôn của Đảng Cộng sản",
                    "Lãnh đạo thắng lợi Cách mạng Tháng Mười Nga (1917) và đưa lý luận thành hiện thực",
                    "Viết tác phẩm Chống Đuy-rinh để bảo vệ chủ nghĩa Mác",
                    "Thành lập Quốc tế thứ nhất"
                ],
                correctAnswer: 1,
                explanation: "V.I.Lênin không chỉ phát triển lý luận cách mạng mà còn trực tiếp lãnh đạo Cách mạng Tháng Mười Nga 1917 thắng lợi, đưa CNXHKH từ lý thuyết trở thành mô hình hiện thực đầu tiên trên thế giới."
            },
            {
                question: "Đối tượng nghiên cứu của Chủ nghĩa xã hội khoa học là gì?",
                options: [
                    "Các quy luật chung nhất của tự nhiên, xã hội và tư duy",
                    "Các quy luật kinh tế của phương thức sản xuất tư bản chủ nghĩa",
                    "Những quy luật chính trị - xã hội của quá trình hình thành, phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa",
                    "Lịch sử các học thuyết chính trị trên thế giới"
                ],
                correctAnswer: 2,
                explanation: "CNXHKH tập trung nghiên cứu những quy luật chính trị - xã hội của quá trình chuyển biến từ CNTB lên CNXH (khác với Triết học nghiên cứu quy luật chung nhất, Kinh tế chính trị nghiên cứu quy luật kinh tế)."
            }
        ]
    },
    {
        id: 2,
        title: "Sứ mệnh lịch sử của giai cấp công nhân",
        shortTitle: "Giai cấp công nhân",
        description: "Làm rõ quan điểm Mác - Lênin về giai cấp công nhân, sứ mệnh lịch sử và vai trò của giai cấp công nhân Việt Nam.",
        objectives: {
            knowledge: "Nắm vững khái niệm, đặc điểm của giai cấp công nhân; hiểu rõ nội dung sứ mệnh lịch sử và các điều kiện khách quan, nhân tố chủ quan quyết định sứ mệnh lịch sử của giai cấp công nhân.",
            skills: "Phân tích được những điểm tương đồng và khác biệt của giai cấp công nhân hiện đại so với giai cấp công nhân thế kỷ XIX; đánh giá thực trạng giai cấp công nhân Việt Nam.",
            attitude: "Ủng hộ và có tinh thần tự hào về vai trò tiên phong của giai cấp công nhân; có ý thức đóng góp học tập để xây dựng giai cấp công nhân tri thức."
        },
        sections: [
            {
                title: "Khái niệm và đặc điểm của giai cấp công nhân",
                summary: "Giai cấp công nhân là tập đoàn xã hội ổn định, được hình thành và phát triển cùng với quá trình phát triển của nền công nghiệp hiện đại, đại biểu cho phương thức sản xuất tiên tiến nhất.",
                keyPoints: [
                    "Phương diện kinh tế - vật chất: Là những người trực tiếp hoặc gián tiếp vận hành máy móc công nghiệp có trình độ xã hội hóa ngày càng cao.",
                    "Phương diện chính trị - xã hội: Là giai cấp không có tư liệu sản xuất dưới chế độ tư bản chủ nghĩa, phải bán sức lao động cho nhà tư bản và bị bóc lột giá trị thặng dư.",
                    "Đặc điểm chính trị: Tính tiên phong cách mạng, tính tổ chức kỷ luật cao, và có tinh thần cách mạng triệt để, đoàn kết quốc tế."
                ],
                takeaway: "Giai cấp công nhân là sản phẩm của bản thân nền đại công nghiệp, đại biểu cho lực lượng sản xuất tiến bộ nhất quyết định sự vận động của xã hội hiện đại."
            },
            {
                title: "Nội dung sứ mệnh lịch sử và điều kiện quyết định",
                summary: "Sứ mệnh lịch sử của giai cấp công nhân là xóa bỏ chế độ bóc lột tư bản chủ nghĩa, giải phóng giai cấp và nhân loại, xây dựng thành công xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa.",
                keyPoints: [
                    "Nội dung sứ mệnh: Diễn ra trên cả 3 lĩnh vực Kinh tế (xây dựng quan hệ sản xuất công hữu), Chính trị (giành chính quyền về tay nhân dân) và Văn hóa - tư tưởng (xây dựng hệ tư tưởng mới).",
                    "Điều kiện khách quan: Vị trí kinh tế - xã hội của giai cấp công nhân và địa vị chính trị - xã hội do nền đại công nghiệp quy định.",
                    "Nhân tố chủ quan: Sự phát triển bản thân giai cấp công nhân về số lượng và chất lượng, đặc biệt nhân tố quyết định nhất là thành lập Đảng Cộng sản cách mạng lãnh đạo."
                ],
                takeaway: "Sứ mệnh lịch sử của giai cấp công nhân không phải do ý muốn chủ quan của các nhà kinh điển mà do chính địa vị khách quan của họ trong nền kinh tế xã hội quy định."
            },
            {
                title: "Giai cấp công nhân Việt Nam và sứ mệnh hiện nay",
                summary: "Giai cấp công nhân Việt Nam ra đời trước giai cấp tư sản dân tộc, gắn liền với cuộc khai thác thuộc địa của thực dân Pháp, mang những nét độc đáo riêng biệt và giữ vai trò đi đầu trong sự nghiệp xây dựng đất nước.",
                keyPoints: [
                    "Đặc điểm lịch sử: Ra đời muộn hơn vô sản phương Tây nhưng sớm tiếp thu chủ nghĩa Mác - Lênin, gắn bó máu thịt với nông dân và khối đại đoàn kết toàn dân tộc.",
                    "Sứ mệnh hiện nay: Đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước, phát triển kinh tế tri thức và giữ vững định hướng xã hội chủ nghĩa dưới sự lãnh đạo của Đảng.",
                    "Nhiệm vụ cấp bách: Trí thức hóa giai cấp công nhân, đào tạo kỹ năng nghề nghiệp và nâng cao ý thức chính trị xã hội."
                ],
                takeaway: "Giai cấp công nhân Việt Nam là lực lượng nòng cốt quyết định sự thành bại của công cuộc đổi mới và phát triển đất nước hiện nay."
            }
        ],
        keyTerms: [
            {
                term: "Giai cấp công nhân",
                definition: "Tập đoàn xã hội trực tiếp vận hành công cụ sản xuất công nghiệp hiện đại, bị bóc lột trong CNTB, là lực lượng đi đầu cách mạng xóa bỏ áp bức.",
                memoryHint: "Giai cấp gắn với nền công nghiệp hiện đại và phương thức sản xuất tiến tiến."
            },
            {
                term: "Sứ mệnh lịch sử thế giới",
                definition: "Nhiệm vụ trọng đại được lịch sử giao phó cho giai cấp công nhân nhằm xóa bỏ áp bức bóc lột tư bản chủ nghĩa, thiết lập xã hội cộng sản văn minh.",
                memoryHint: "Nhiệm vụ xóa bỏ áp bức tư bản, giải phóng mình và giải phóng toàn nhân loại."
            },
            {
                term: "Đảng Cộng sản",
                definition: "Đội tiên phong chính trị của giai cấp công nhân, tập hợp những phần tử ưu tú nhất, được trang bị lý luận khoa học để lãnh đạo cách mạng vô sản.",
                memoryHint: "Nhân tố chủ quan quyết định nhất để giai cấp công nhân hoàn thành sứ mệnh."
            },
            {
                term: "Giá trị thặng dư (m)",
                definition: "Phần giá trị do sức lao động của công nhân tạo ra ngoài thời gian lao động tất yếu, bị nhà tư bản chiếm đoạt không công.",
                memoryHint: "Nguồn gốc của sự giàu có của nhà tư bản và sự bần cùng hóa giai cấp công nhân."
            },
            {
                term: "Trí thức hóa công nhân",
                definition: "Quá trình nâng cao học vấn, năng lực công nghệ, trình độ chuyên môn và giác ngộ chính trị cho người lao động trong thời đại cách mạng công nghiệp.",
                memoryHint: "Nâng cao chất lượng giai cấp công nhân bằng tri thức và kỹ năng hiện đại."
            }
        ],
        vietnamConnection: "Giai cấp công nhân Việt Nam hiện đang giữ vai trò là giai cấp lãnh đạo cách mạng thông qua đội tiên phong là Đảng Cộng sản Việt Nam. Trong thời kỳ đổi mới, công nhân là lực lượng đi đầu trong việc ứng dụng khoa học công nghệ, đóng góp lớn nhất vào GDP quốc gia và là hạt nhân xây dựng khối liên minh bền vững với nông dân và tầng lớp trí thức.",
        essayQuestions: [
            "Phân tích những điều kiện khách quan quy định sứ mệnh lịch sử thế giới của giai cấp công nhân.",
            "Tại sao Đảng Cộng sản là nhân tố quyết định nhất để giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình?",
            "Làm rõ những đặc điểm độc đáo của giai cấp công nhân Việt Nam khi ra đời và phát triển."
        ],
        examTips: [
            "Không nhầm lẫn: Điều kiện khách quan dựa vào kinh tế và chính trị do nền sản xuất quy định; Nhân tố chủ quan dựa vào tổ chức, số lượng, chất lượng và đặc biệt là Đảng Cộng sản.",
            "Giai cấp công nhân Việt Nam ra đời trước giai cấp tư sản dân tộc Việt Nam (đây là điểm độc đáo so với phương Tây).",
            "Mục tiêu tối cao của giai cấp công nhân là giải phóng loài người khỏi chế độ áp bức bóc lột, chứ không chỉ riêng giải phóng giai cấp mình.",
            "Đặc trưng cốt lõi của công nhân hiện đại là gắn liền với kinh tế tri thức và cách mạng công nghệ số.",
            "Đảng Cộng sản ra đời là sự kết hợp giữa chủ nghĩa Mác-Lênin với phong trào công nhân (đối với Việt Nam có thêm phong trào yêu nước)."
        ],
        quizzes: [
            {
                question: "Nhân tố chủ quan nào giữ vai trò quyết định nhất để giai cấp công nhân hoàn thành sứ mệnh lịch sử?",
                options: [
                    "Sự gia tăng nhanh chóng về số lượng công nhân",
                    "Sự thành lập và lãnh đạo của Đảng Cộng sản",
                    "Sự đồng tình và giúp đỡ của giai cấp nông dân",
                    "Việc trang bị các công cụ máy móc hiện đại"
                ],
                correctAnswer: 1,
                explanation: "Đảng Cộng sản là đội tiên phong chiến đấu của giai cấp công nhân, có lý luận khoa học dẫn đường. Không có sự lãnh đạo của Đảng, phong trào công nhân chỉ dừng lại ở mức đấu tranh tự phát."
            },
            {
                question: "Về mặt kinh tế - xã hội, giai cấp công nhân đại biểu cho điều gì?",
                options: [
                    "Phương thức sản xuất thủ công nhỏ lẻ",
                    "Quan hệ sản xuất phong kiến",
                    "Lực lượng sản xuất tiên tiến, có trình độ xã hội hóa ngày càng cao",
                    "Chế độ tư hữu tư nhân tuyệt đối"
                ],
                correctAnswer: 2,
                explanation: "Giai cấp công nhân gắn liền với đại công nghiệp và máy móc tiên tiến, đại biểu cho lực lượng sản xuất có trình độ xã hội hóa ngày càng cao và quan hệ sản xuất tiến bộ trong tương lai."
            },
            {
                question: "Sứ mệnh lịch sử của giai cấp công nhân do nguồn gốc nào quyết định?",
                options: [
                    "Do sự giáo dục của các nhà triết học không tưởng",
                    "Do địa vị kinh tế - xã hội khách quan của họ trong lòng xã hội tư bản",
                    "Do lòng nhân ái và mong muốn cứu giúp nhân loại của bản thân công nhân",
                    "Do sự áp đặt của các văn kiện pháp lý quốc tế"
                ],
                correctAnswer: 1,
                explanation: "Sứ mệnh lịch sử của giai cấp công nhân được quy định một cách khách quan bởi địa vị kinh tế - xã hội của họ trong lòng phương thức sản xuất tư bản chủ nghĩa và sự phát triển của nền công nghiệp."
            },
            {
                question: "Một trong những điểm độc đáo về nguồn gốc ra đời của giai cấp công nhân Việt Nam là gì?",
                options: [
                    "Ra đời sau giai cấp tư sản Việt Nam",
                    "Ra đời trước giai cấp tư sản dân tộc Việt Nam, gắn liền cuộc khai thác thuộc địa Pháp",
                    "Không có mối quan hệ gì với giai cấp nông dân",
                    "Xuất thân hoàn toàn từ các trung tâm đô thị phát triển của phương Tây"
                ],
                correctAnswer: 1,
                explanation: "Giai cấp công nhân Việt Nam ra đời đầu thế kỷ XX trong đợt khai thác thuộc địa của Pháp, xuất hiện trước cả giai cấp tư sản dân tộc. Họ trực tiếp đối đầu với đế quốc thực dân."
            },
            {
                question: "Đâu là quy luật chung cho sự ra đời của Đảng Cộng sản ở các nước tư bản chủ nghĩa phát triển?",
                options: [
                    "Chủ nghĩa Mác-Lênin kết hợp với phong trào công nhân",
                    "Chủ nghĩa Mác-Lênin kết hợp với phong trào yêu nước",
                    "Sự liên minh giữa giai cấp công nhân và giai cấp nông dân",
                    "Sự bảo trợ tài chính của giai cấp tư sản"
                ],
                correctAnswer: 0,
                explanation: "Ở các nước tư bản phát triển, Đảng Cộng sản ra đời từ sự kết hợp biện chứng giữa Chủ nghĩa Mác - Lênin và phong trào công nhân. Tại Việt Nam, quy luật này bổ sung thêm yếu tố Phong trào yêu nước."
            }
        ]
    },
    {
        id: 3,
        title: "Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội",
        shortTitle: "Chủ nghĩa xã hội & Quá độ",
        description: "Trình bày đặc trưng của chủ nghĩa xã hội, tính tất yếu và con đường quá độ lên chủ nghĩa xã hội ở Việt Nam.",
        objectives: {
            knowledge: "Hiểu rõ các đặc trưng cơ bản của chủ nghĩa xã hội; tính tất yếu lịch sử, đặc điểm và nội dung của thời kỳ quá độ lên chủ nghĩa xã hội.",
            skills: "Phân tích được con đường quá độ gián tiếp bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam; làm rõ bản chất kinh tế thị trường định hướng XHCN.",
            attitude: "Tin tưởng vào đường lối đổi mới của Đảng; đấu tranh chống các luận điệu phủ nhận con đường đi lên CNXH ở nước ta."
        },
        sections: [
            {
                title: "Chủ nghĩa xã hội - Giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa",
                summary: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa phát triển từ thấp đến cao qua hai giai đoạn: giai đoạn thấp là chủ nghĩa xã hội và giai đoạn cao là chủ nghĩa cộng sản, ngăn cách bởi thời kỳ quá độ lịch sử.",
                keyPoints: [
                    "Cơ sở vật chất của CNXH: Nền sản xuất đại công nghiệp hiện đại phát triển cao dựa trên tiến bộ khoa học kỹ thuật.",
                    "Chế độ sở hữu: Thiết lập chế độ công hữu về các tư liệu sản xuất chủ yếu nhằm loại bỏ tận gốc sự áp bức bóc lột.",
                    "Đặc trưng xã hội: Giải phóng con người, tạo điều kiện phát triển tự do toàn diện; thực hiện nguyên tắc phân phối theo lao động."
                ],
                takeaway: "Chủ nghĩa xã hội là xã hội nhân văn sâu sắc, đặt con người ở vị trí trung tâm phát triển và tiến tới xóa bỏ hoàn toàn sự phân chia giai cấp."
            },
            {
                title: "Tính tất yếu và đặc điểm của thời kỳ quá độ",
                summary: "Thời kỳ quá độ lên chủ nghĩa xã hội là tất yếu khách quan cho mọi quốc gia muốn tiến lên CNXH, là thời kỳ cải biến cách mạng sâu sắc toàn diện trên mọi lĩnh vực đời sống xã hội.",
                keyPoints: [
                    "Tính tất yếu: Cần thời gian để cải biến các tàn dư xã hội cũ và xây dựng các yếu tố kinh tế, văn hóa, chính trị của xã hội mới.",
                    "Đặc điểm kinh tế: Sự tồn tại nền kinh tế nhiều thành phần đan xen phức tạp giữa kinh tế xã hội chủ nghĩa và tư bản tư nhân.",
                    "Đặc điểm chính trị: Giai cấp công nhân nắm quyền lực chính trị (chuyên chính vô sản), dẫn dắt các giai cấp lao động đấu tranh chống các thế lực thù địch."
                ],
                takeaway: "Thời kỳ quá độ là thời kỳ đan xen, đấu tranh gay gắt giữa cái mới đang hình thành và cái cũ chưa tiêu vong hoàn toàn."
            },
            {
                title: "Con đường quá độ lên chủ nghĩa xã hội ở Việt Nam",
                summary: "Việt Nam thực hiện con đường quá độ gián tiếp bỏ qua chế độ tư bản chủ nghĩa, đi lên chủ nghĩa xã hội từ một nước nông nghiệp lạc hậu, chịu hậu quả nặng nề của chiến tranh.",
                keyPoints: [
                    "Bỏ qua chế độ tư bản chủ nghĩa: Là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu tinh hoa khoa học công nghệ nhân loại.",
                    "Đặc trưng mô hình XHCN Việt Nam: Gồm 8 đặc trưng cốt lõi xác định trong Cương lĩnh (Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; do nhân dân làm chủ; kinh tế phát triển cao...).",
                    "Kinh tế thị trường định hướng XHCN: Mô hình kinh tế tổng quát trong thời kỳ quá độ, kết hợp sức mạnh thị trường với sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa."
                ],
                takeaway: "Quá độ bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam là sự lựa chọn sáng tạo, khoa học, phù hợp với quy luật lịch sử và thực tiễn đất nước."
            }
        ],
        keyTerms: [
            {
                term: "Thời kỳ quá độ lên CNXH",
                definition: "Khoảng thời gian lịch sử cần thiết để cải biến cách mạng sâu sắc xã hội cũ thành xã hội mới, bắt đầu từ khi giai cấp công nhân giành chính quyền đến khi xây dựng xong cơ sở của CNXH.",
                memoryHint: "Giai đoạn đan xen và đấu tranh quyết liệt giữa cái cũ (TBCN) và cái mới (XHCN)."
            },
            {
                term: "Quá độ gián tiếp",
                definition: "Con đường đi lên chủ nghĩa xã hội từ các nước chưa trải qua giai đoạn phát triển tư bản chủ nghĩa, cần bỏ qua chế độ tư bản chủ nghĩa.",
                memoryHint: "Con đường đi lên CNXH của các nước nông nghiệp lạc hậu, tiêu biểu là Việt Nam."
            },
            {
                term: "Bỏ qua chế độ tư bản chủ nghĩa",
                definition: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng phải kế thừa và tiếp thu các thành tựu văn minh nhân loại đạt được dưới CNTB.",
                memoryHint: "Bỏ qua sự thống trị chính trị và kinh tế bóc lột của tư sản, giữ lại văn minh công nghệ."
            },
            {
                term: "Phân phối theo lao động",
                definition: "Nguyên tắc phân phối chủ đạo trong CNXH: Làm nhiều hưởng nhiều, làm ít hưởng ít, có sức lao động mà không làm thì không hưởng.",
                memoryHint: "Nguyên tắc công bằng xã hội dựa trên đóng góp lao động thực tế."
            },
            {
                term: "Kinh tế thị trường định hướng XHCN",
                definition: "Nền kinh tế vận hành theo các quy luật thị trường có sự quản lý của Nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng, hướng tới mục tiêu dân giàu, nước mạnh.",
                memoryHint: "Kinh tế thị trường hiện đại kết hợp mục tiêu xã hội chủ nghĩa nhân văn."
            }
        ],
        vietnamConnection: "Đại hội XIII của Đảng khẳng định đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay. Đó là minh chứng sống động cho tính đúng đắn của con đường quá độ lên chủ nghĩa xã hội, phát triển nền kinh tế thị trường định hướng XHCN phù hợp với xu thế thời đại và hoàn cảnh lịch sử Việt Nam.",
        essayQuestions: [
            "Phân tích đặc trưng nổi bật về mặt kinh tế và chính trị trong thời kỳ quá độ lên chủ nghĩa xã hội.",
            "Làm thế nào để hiểu đúng khái niệm 'bỏ qua chế độ tư bản chủ nghĩa' trong tiến trình quá độ ở nước ta hiện nay?",
            "Trình bày các đặc trưng của mô hình chủ nghĩa xã hội mà nhân dân ta đang xây dựng được nêu trong Cương lĩnh (bổ sung, phát triển năm 2011)."
        ],
        examTips: [
            "Nắm vững định nghĩa phân phối trong CNXH: 'Làm theo năng lực, hưởng theo lao động' (tránh nhầm với CNCS là 'hưởng theo nhu cầu').",
            "Thời kỳ quá độ ở Việt Nam bắt đầu từ năm 1954 ở miền Bắc và từ năm 1975 trên phạm vi cả nước.",
            "Nhớ kỹ cụm từ khóa 'bỏ qua': bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN, không phải bỏ qua mọi thành tựu của CNTB.",
            "Đặc điểm chính trị lớn nhất của thời kỳ quá độ là sự tồn tại của chuyên chính vô sản (nhà nước của giai cấp công nhân).",
            "Nền kinh tế thời kỳ quá độ phải là nền kinh tế nhiều thành phần (không thể xóa bỏ tư hữu ngay lập tức)."
        ],
        quizzes: [
            {
                question: "Nguyên tắc phân phối chủ đạo trong giai đoạn thấp của xã hội cộng sản chủ nghĩa (Chủ nghĩa xã hội) là gì?",
                options: [
                    "Phân phối bình quân cào bằng",
                    "Phân phối theo nhu cầu tiêu dùng",
                    "Phân phối theo lao động",
                    "Phân phối theo vốn đóng góp"
                ],
                correctAnswer: 2,
                explanation: "Trong giai đoạn chủ nghĩa xã hội, do lực lượng sản xuất chưa phát triển cực thịnh, nguyên tắc phân phối chủ đạo là 'làm theo năng lực, phân phối theo lao động'."
            },
            {
                question: "Tính chất đan xen về mặt kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội thể hiện qua điều gì?",
                options: [
                    "Chỉ tồn tại duy nhất một thành phần kinh tế quốc doanh",
                    "Sự tồn tại của nền kinh tế nhiều thành phần",
                    "Nền kinh tế hoàn toàn phụ thuộc vào viện trợ quốc tế",
                    "Không sử dụng tiền tệ và thị trường tự do"
                ],
                correctAnswer: 1,
                explanation: "Về kinh tế, thời kỳ quá độ tồn tại nền kinh tế nhiều thành phần (bao gồm kinh tế nhà nước, tập thể, tư nhân, đầu tư nước ngoài...) cùng phát triển cạnh tranh lẫn nhau."
            },
            {
                question: "Hiểu thế nào là đúng về con đường 'bỏ qua chế độ tư bản chủ nghĩa' ở Việt Nam?",
                options: [
                    "Đốt cháy giai đoạn sản xuất công nghiệp, đi thẳng vào nông nghiệp sạch",
                    "Bỏ qua việc xác lập vị trí thống trị của QXS và kiến trúc thượng tầng TBCN, tiếp thu thành tựu văn minh nhân loại dưới CNTB",
                    "Xóa bỏ hoàn toàn ngay lập tức mọi yếu tố sản xuất tư nhân và thị trường tư bản",
                    "Tuyên bố không quan hệ ngoại giao với các nước tư bản chủ nghĩa"
                ],
                correctAnswer: 1,
                explanation: "Bỏ qua chế độ tư bản chủ nghĩa là bỏ qua vị thế thống trị của QHCS và kiến trúc thượng tầng tư bản, nhưng phải kế thừa và tiếp thu các giá trị văn minh mà nhân loại đạt được trong thời kỳ tư bản."
            },
            {
                question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011) xác định xã hội XHCN ở Việt Nam có mấy đặc trưng?",
                options: [
                    "6 đặc trưng",
                    "7 đặc trưng",
                    "8 đặc trưng",
                    "9 đặc trưng"
                ],
                correctAnswer: 2,
                explanation: "Cương lĩnh (bổ sung, phát triển năm 2011) đã xác định rõ mô hình chủ nghĩa xã hội mà nhân dân Việt Nam xây dựng gồm có 8 đặc trưng cơ bản."
            },
            {
                question: "Đâu là đặc điểm chính trị nổi bật trong thời kỳ quá độ lên chủ nghĩa xã hội?",
                options: [
                    "Giai cấp tư sản hoàn toàn nắm độc quyền cai trị đất nước",
                    "Thiết lập nhà nước chuyên chính vô sản, thực hiện sự lãnh đạo của giai cấp công nhân",
                    "Không còn tồn tại nhà nước và luật pháp hành chính",
                    "Đa đảng đối lập cùng nắm giữ chính quyền lập pháp"
                ],
                correctAnswer: 1,
                explanation: "Về chính trị, đặc điểm nổi bật là thiết lập nhà nước của giai cấp công nhân (chuyên chính vô sản), thực hiện nền dân chủ rộng rãi cho nhân dân lao động và đấu tranh ngăn chặn các thế lực phá hoại."
            }
        ]
    },
    {
        id: 4,
        title: "Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa",
        shortTitle: "Dân chủ & Nhà nước",
        description: "Phân tích nền dân chủ xã hội chủ nghĩa, nhà nước xã hội chủ nghĩa và nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.",
        objectives: {
            knowledge: "Nắm vững bản chất của nền dân chủ XHCN và nhà nước XHCN; nắm rõ khái niệm, đặc trưng của Nhà nước pháp quyền XHCN Việt Nam.",
            skills: "Phân biệt được dân chủ xã hội chủ nghĩa với các nền dân chủ trước đó trong lịch sử; biết cách thực hiện quyền công dân đúng pháp luật.",
            attitude: "Tôn trọng pháp luật; có ý thức làm chủ xã hội, tích cực tham gia đóng góp xây dựng chính quyền địa phương vững mạnh."
        },
        sections: [
            {
                title: "Dân chủ và sự phát triển của nền dân chủ xã hội chủ nghĩa",
                summary: "Dân chủ là một giá trị nhân văn cao quý, đồng thời là một phạm trù lịch sử phản ánh quyền lực thuộc về nhân dân. Dân chủ xã hội chủ nghĩa là nền dân chủ cao nhất trong lịch sử nhân loại.",
                keyPoints: [
                    "Bản chất chính trị: Thực hiện sự lãnh đạo của giai cấp công nhân thông qua Đảng đối với xã hội, bảo đảm quyền làm chủ thực sự của nhân dân lao động.",
                    "Bản chất kinh tế: Dựa trên quan hệ sản xuất công hữu về tư liệu sản xuất chủ yếu, giải phóng sức lao động và phân phối công bằng.",
                    "Bản chất tư tưởng - văn hóa: Lấy chủ nghĩa Mác - Lênin làm nền tảng tư tưởng chủ đạo, kế thừa các giá trị văn hóa tinh hoa nhân loại."
                ],
                takeaway: "Dân chủ xã hội chủ nghĩa không phải là dân chủ hình thức mà là nền dân chủ thực chất, bảo đảm quyền lực tối cao thuộc về nhân dân."
            },
            {
                title: "Nhà nước xã hội chủ nghĩa - Bản chất và chức năng",
                summary: "Nhà nước xã hội chủ nghĩa là nhà nước kiểu mới, mang bản chất của giai cấp công nhân, là công cụ chủ yếu để giai cấp công nhân và nhân dân lao động tổ chức xây dựng xã hội mới.",
                keyPoints: [
                    "Bản chất nhà nước: Là tổ chức chính quyền của nhân dân lao động, đặt dưới sự lãnh đạo tiên phong của Đảng Cộng sản.",
                    "Chức năng tổ chức xây dựng: Đây là chức năng cơ bản, trọng tâm nhất nhằm phát triển kinh tế, giáo dục, y tế và nâng cao đời sống nhân dân.",
                    "Chức năng trấn áp: Ngăn chặn kịp thời các hành vi phá hoại của các thế lực phản động chống phá cách mạng, giữ vững trật tự xã hội."
                ],
                takeaway: "Nhà nước XHCN là một 'nửa nhà nước', tự tiêu vong dần khi các cơ sở giai cấp không còn tồn tại và xã hội tự quản phát triển."
            },
            {
                title: "Nền dân chủ và Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam",
                summary: "Việt Nam xây dựng nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
                keyPoints: [
                    "Dân chủ trực tiếp và dân chủ đại diện: Thực hiện phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
                    "Đặc trưng Nhà nước pháp quyền Việt Nam: Thượng tôn Hiến pháp và pháp luật; quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp.",
                    "Cải cách bộ máy hành chính: Tinh gọn bộ máy, phòng chống tham nhũng lãng phí, xây dựng đội ngũ công chức tận tụy, liêm chính."
                ],
                takeaway: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là công cụ sắc bén nhất để bảo đảm quyền làm chủ tối cao của nhân dân và thúc đẩy phát triển đất nước."
            }
        ],
        keyTerms: [
            {
                term: "Dân chủ xã hội chủ nghĩa",
                definition: "Nền dân chủ thực hiện quyền làm chủ của tuyệt đại đa số nhân dân lao động trên mọi lĩnh vực đời sống, mang bản chất giai cấp công nhân dưới sự dẫn dắt của Đảng.",
                memoryHint: "Nền dân chủ cao nhất trong lịch sử, quyền lực thuộc về nhân dân lao động."
            },
            {
                term: "Nhà nước xã hội chủ nghĩa",
                definition: "Nhà nước mang bản chất giai cấp công nhân, vừa là công cụ trấn áp lực lượng phản cách mạng, vừa là tổ chức xây dựng nền kinh tế - xã hội mới.",
                memoryHint: "Công cụ chủ yếu của nhân dân để cải tạo xã hội cũ, xây dựng xã hội mới."
            },
            {
                term: "Nhà nước pháp quyền XHCN",
                definition: "Nhà nước quản lý xã hội tối cao bằng Hiến pháp và pháp luật, đặt dưới sự lãnh đạo của Đảng Cộng sản, bảo vệ lợi ích tối thượng của nhân dân.",
                memoryHint: "Nhà nước thượng tôn pháp luật, đặt dưới sự lãnh đạo của Đảng."
            },
            {
                term: "Dân chủ trực tiếp",
                definition: "Hình thức nhân dân tự mình quyết định trực tiếp các vấn đề của nhà nước và địa phương thông qua trưng cầu ý dân, bỏ phiếu bầu cử.",
                memoryHint: "Người dân trực tiếp biểu quyết, đưa ra ý kiến quyết định không qua trung gian."
            },
            {
                term: "Dân chủ đại diện",
                definition: "Hình thức nhân dân ủy quyền làm chủ của mình cho các cơ quan quyền lực nhà nước do mình bầu ra đại diện (như Quốc hội, Hội đồng nhân dân).",
                memoryHint: "Thực hiện quyền lực nhân dân thông qua đại biểu đại diện."
            }
        ],
        vietnamConnection: "Ở nước ta, Hiến pháp năm 2013 khẳng định: 'Nước Cộng hòa xã hội chủ nghĩa Việt Nam do Nhân dân làm chủ; tất cả quyền lực nhà nước thuộc về Nhân dân'. Thực tiễn phòng chống dịch bệnh và phát triển kinh tế xã hội tại Việt Nam chứng minh sự tối ưu của việc phát huy nền dân chủ XHCN và sức mạnh đồng lòng của nhân dân dưới sự quản lý của nhà nước.",
        essayQuestions: [
            "Phân tích bản chất của nền dân chủ xã hội chủ nghĩa trên các lĩnh vực chính trị, kinh tế, và tư tưởng - văn hóa.",
            "Trình bày những đặc trưng cơ bản của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam.",
            "Hãy làm rõ mối quan hệ giữa dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa."
        ],
        examTips: [
            "Dân chủ là một phạm trù lịch sử (xuất hiện khi có nhà nước, giai cấp) nhưng cũng là một phạm trù vĩnh cửu (với tư cách là giá trị nhân văn chung).",
            "Nhà nước pháp quyền không phải là một kiểu nhà nước (như chủ nô, phong kiến, tư sản, vô sản) mà là một phương thức tổ chức điều hành nhà nước dựa trên pháp luật.",
            "Quyền lực nhà nước Việt Nam là thống nhất, không áp dụng nguyên tắc 'tam quyền phân lập' của tư sản mà là 'phân công, phối hợp, và kiểm soát'.",
            "Chức năng tổ chức xây dựng kinh tế văn hóa là chức năng căn bản và quan trọng nhất của Nhà nước XHCN.",
            "Phương châm dân chủ Việt Nam hiện nay có thêm từ khóa: 'Dân giám sát, dân thụ hưởng' (Đại hội XIII)."
        ],
        quizzes: [
            {
                question: "Nền dân chủ đầu tiên xuất hiện trong lịch sử loài người là nền dân chủ nào?",
                options: [
                    "Dân chủ chủ nô",
                    "Dân chủ phong kiến",
                    "Dân chủ tư sản",
                    "Dân chủ xã hội chủ nghĩa"
                ],
                correctAnswer: 0,
                explanation: "Lịch sử nhân loại ghi nhận nền dân chủ đầu tiên ra đời trong xã hội chiếm hữu nô lệ (Dân chủ chủ nô), tiêu biểu là mô hình bang Athens ở Hy Lạp cổ đại."
            },
            {
                question: "Sự khác biệt cốt lõi về bản chất kinh tế của dân chủ XHCN so với dân chủ tư sản là gì?",
                options: [
                    "Dựa trên quan hệ sản xuất tư hữu tư bản chủ nghĩa",
                    "Dựa trên chế độ công hữu về các tư liệu sản xuất chủ yếu",
                    "Không sử dụng các thành tựu của khoa học công nghệ",
                    "Tập trung bảo vệ quyền lợi của tập đoàn tài chính đa quốc gia"
                ],
                correctAnswer: 1,
                explanation: "Nền dân chủ XHCN dựa trên chế độ sở hữu công cộng (công hữu) về tư liệu sản xuất chủ yếu, giải quyết triệt để sự áp bức bóc lột kinh tế. Ngược lại dân chủ tư sản dựa trên tư hữu."
            },
            {
                question: "Theo quan điểm của chủ nghĩa Mác - Lênin, nhà nước xã hội chủ nghĩa mang bản chất của giai cấp nào?",
                options: [
                    "Giai cấp nông dân lao động",
                    "Tầng lớp trí thức tinh hoa",
                    "Giai cấp công nhân",
                    "Toàn thể nhân dân một cách vô điều kiện"
                ],
                correctAnswer: 2,
                explanation: "Nhà nước XHCN mang bản chất giai cấp công nhân - giai cấp tiên phong cách mạng giữ vai trò lãnh đạo xã hội thông qua Đảng Cộng sản."
            },
            {
                question: "Quyền lực nhà nước trong Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam được tổ chức theo nguyên tắc nào?",
                options: [
                    "Tam quyền phân lập độc lập tuyệt đối giữa các cơ quan",
                    "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp",
                    "Tập trung tuyệt đối vào tay một cá nhân nguyên thủ duy nhất không kiểm soát",
                    "Mỗi tỉnh thành tự quyết định pháp luật riêng biệt"
                ],
                correctAnswer: 1,
                explanation: "Hệ thống chính trị Việt Nam tổ chức quyền lực thống nhất dưới sự lãnh đạo của Đảng, không tam quyền phân lập mà phân công, phối hợp và kiểm soát chặt chẽ giữa 3 nhánh quyền lực."
            },
            {
                question: "Phương châm thực hiện dân chủ ở cơ sở tại Việt Nam hiện nay được quy định gồm những nội dung nào?",
                options: [
                    "Dân biết, dân làm, dân kiểm tra",
                    "Dân bàn, dân làm, dân kiểm tra, dân giám sát",
                    "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng",
                    "Dân phục tùng ý chí của cơ quan quản lý"
                ],
                correctAnswer: 2,
                explanation: "Văn kiện Đại hội XIII của Đảng đã bổ sung đầy đủ phương châm dân chủ trực tiếp ở cơ sở thành: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'."
            }
        ]
    },
    {
        id: 5,
        title: "Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp",
        shortTitle: "Cơ cấu xã hội & Liên minh",
        description: "Làm rõ sự biến đổi cơ cấu xã hội - giai cấp và tầm quan trọng của khối liên minh công - nông - trí thức trong thời kỳ quá độ.",
        objectives: {
            knowledge: "Hiểu rõ khái niệm cơ cấu xã hội - giai cấp; nắm vững tính tất yếu và nội dung của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội.",
            skills: "Nhận diện được sự biến đổi cơ cấu xã hội - giai cấp ở Việt Nam; phân tích được tính gắn kết của các lợi ích kinh tế trong liên minh.",
            attitude: "Ủng hộ khối đại đoàn kết toàn dân tộc; tôn trọng vai trò của tất cả các giai cấp, tầng lớp xã hội khác nhau trong quá trình xây dựng đất nước."
        },
        sections: [
            {
                title: "Cơ cấu xã hội - giai cấp và sự biến đổi trong thời kỳ quá độ",
                summary: "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan và mối quan hệ giữa chúng, chịu sự quyết định trực tiếp của kết cấu kinh tế quốc gia.",
                keyPoints: [
                    "Khái niệm: Phân chia dân cư dựa trên các quan hệ sản xuất, chiếm vị trí quan trọng nhất trong các loại hình cơ cấu xã hội (cơ cấu dân số, nghề nghiệp, dân tộc).",
                    "Xu hướng biến đổi: Biến đổi đa dạng, phức tạp và mang tính quy luật gắn liền với sự chuyển đổi của cơ cấu kinh tế nhiều thành phần.",
                    "Sự xuất hiện các tầng lớp mới: Tầng lớp doanh nhân, những người làm việc tự do bên cạnh công nhân, nông dân và trí thức."
                ],
                takeaway: "Cơ cấu xã hội - giai cấp biến đổi liên tục trong thời kỳ quá độ, phản ánh trung thực tính chất đan xen phức tạp của nền kinh tế."
            },
            {
                title: "Tính tất yếu và nội dung của liên minh giai cấp, tầng lớp",
                summary: "Liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức là quy luật chính trị - xã hội phổ biến bảo đảm thắng lợi của sự nghiệp xây dựng chủ nghĩa xã hội.",
                keyPoints: [
                    "Tính tất yếu chính trị: Giai cấp công nhân cần liên kết để tạo lực lượng đa số đấu tranh cách mạng và giữ vững chính quyền.",
                    "Nội dung kinh tế (Quyết định nhất): Sự gắn kết lợi ích kinh tế, hợp tác sản xuất giữa công nghiệp, nông nghiệp và khoa học công nghệ.",
                    "Nội dung văn hóa - xã hội: Hợp tác nâng cao trình độ dân trí, phát triển nguồn nhân lực chất lượng cao và giữ gìn bản sắc văn hóa."
                ],
                takeaway: "Liên minh công - nông - trí thức không phải là sự áp đặt chủ quan mà dựa trên sự tương đồng khách quan về lợi ích kinh tế và mục tiêu chính trị."
            },
            {
                title: "Cơ cấu xã hội - giai cấp và liên minh ở Việt Nam hiện nay",
                summary: "Thời kỳ quá độ ở Việt Nam chứng kiến sự biến đổi tích cực của cơ cấu giai cấp và yêu cầu củng cố khối đại đoàn kết toàn dân tộc làm động lực phát triển.",
                keyPoints: [
                    "Thực trạng giai cấp: Giai cấp công nhân phát triển hiện đại; Giai cấp nông dân giảm dần tỷ trọng nhưng nâng cao năng lực sản xuất; Đội ngũ trí thức phát triển mạnh mẽ.",
                    "Vai trò của tầng lớp doanh nhân: Đóng vai trò tiên phong trong sản xuất kinh doanh, giải quyết việc làm và thúc đẩy hội nhập kinh tế quốc tế.",
                    "Phương hướng củng cố liên minh: Thực hiện hài hòa lợi ích kinh tế; hoàn thiện các chính sách hỗ trợ phát triển nông thôn, giáo dục, dạy nghề."
                ],
                takeaway: "Xây dựng khối liên minh vững chắc dưới sự lãnh đạo của Đảng là nhân tố quyết định phát triển lực lượng sản xuất và ổn định xã hội tại Việt Nam."
            }
        ],
        keyTerms: [
            {
                term: "Cơ cấu xã hội - giai cấp",
                definition: "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan và các mối quan hệ tác động qua lại giữa chúng trong một giai đoạn lịch sử nhất định.",
                memoryHint: "Loại hình cơ cấu xã hội cốt lõi quyết định mọi quan hệ chính trị."
            },
            {
                term: "Liên minh giai cấp",
                definition: "Sự liên kết, hợp tác bền vững giữa hai hoặc nhiều giai cấp, tầng lớp xã hội nhằm thực hiện các mục tiêu chung về kinh tế và chính trị.",
                memoryHint: "Khối liên kết tập hợp lực lượng cách mạng dưới sự lãnh đạo của Đảng."
            },
            {
                term: "Lợi ích kinh tế liên minh",
                definition: "Sự tương đồng và hỗ trợ lẫn nhau về nhu cầu vật chất giữa công nghiệp (công nhân), nông nghiệp (nông dân) và khoa học kỹ thuật (trí thức).",
                memoryHint: "Cơ sở cốt lõi và động lực trực tiếp nhất để giữ vững liên minh lâu dài."
            },
            {
                term: "Đội ngũ trí thức",
                definition: "Lực lượng lao động trí óc đặc biệt, có học vấn cao, đóng vai trò sáng tạo và truyền bá tri thức, khoa học công nghệ vào đời sống.",
                memoryHint: "Bộ phận không thể thiếu trong liên minh để đưa đất nước phát triển bằng công nghệ."
            },
            {
                term: "Khối đại đoàn kết toàn dân tộc",
                definition: "Khối tập hợp rộng rãi toàn dân dưới sự lãnh đạo của Đảng, lấy liên minh công - nông - trí thức làm nền tảng cốt lõi.",
                memoryHint: "Động lực phát triển đất nước bền vững theo tư tưởng Hồ Chí Minh."
            }
        ],
        vietnamConnection: "Trong giai đoạn hiện nay, Việt Nam đang tập trung thực hiện công nghiệp hóa gắn liền với phát triển nông nghiệp công nghệ cao và kinh tế số. Điều này yêu cầu sự gắn kết chặt chẽ hơn bao giờ hết giữa công nhân vận hành nhà máy, nông dân sản xuất nông sản và trí thức nghiên cứu phần mềm, giải pháp sinh học.",
        essayQuestions: [
            "Tại sao nói sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ bị quyết định bởi sự biến đổi của cơ cấu kinh tế?",
            "Trình bày nội dung kinh tế và nội dung chính trị của liên minh công - nông - trí thức trong thời kỳ quá độ lên CNXH.",
            "Nêu thực trạng và xu hướng biến đổi của các giai cấp, tầng lớp cơ bản trong xã hội Việt Nam hiện nay."
        ],
        examTips: [
            "Cơ cấu xã hội - giai cấp là cơ cấu quan trọng nhất vì nó liên quan trực tiếp đến quyền lực chính trị và sự thay thế các hình thái kinh tế - xã hội.",
            "Liên minh công - nông - trí thức luôn có 3 nội dung: Chính trị, Kinh tế (nội dung quyết định nhất), Văn hóa - xã hội.",
            "Nhớ rõ: Trí thức là một tầng lớp/đội ngũ xã hội đặc biệt, không phải là một giai cấp độc lập.",
            "Liên minh trong thời kỳ quá độ khác liên minh trong chiến tranh: Chuyển từ đấu tranh giành chính quyền sang hợp tác xây dựng kinh tế.",
            "Xu hướng biến đổi giai cấp nông dân ở Việt Nam hiện nay là: giảm dần về số lượng, tăng năng lực công nghệ và chuyển dịch cơ cấu sang phi nông nghiệp."
        ],
        quizzes: [
            {
                question: "Cơ cấu xã hội nào giữ vị trí vị trí trung tâm, quyết định trực tiếp đến các quan hệ chính trị trong thời kỳ quá độ?",
                options: [
                    "Cơ cấu xã hội - dân số",
                    "Cơ cấu xã hội - giai cấp",
                    "Cơ cấu xã hội - nghề nghiệp",
                    "Cơ cấu xã hội - dân tộc"
                ],
                correctAnswer: 1,
                explanation: "Cơ cấu xã hội - giai cấp phản ánh vị trí sở hữu tư liệu sản xuất và quyền lực chính trị trực tiếp, do đó giữ vị trí trung tâm chi phối các cơ cấu xã hội khác."
            },
            {
                question: "Sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ bị quyết định trực tiếp bởi yếu tố nào?",
                options: [
                    "Sự thay đổi của khí hậu toàn cầu",
                    "Sự biến đổi của cơ cấu kinh tế nhiều thành phần",
                    "Ý muốn chủ quan của giai cấp thống trị",
                    "Sự gia tăng tỷ lệ dân số thành thị"
                ],
                correctAnswer: 1,
                explanation: "Cơ cấu giai cấp thuộc về quan hệ sản xuất xã hội, phản ánh trực tiếp kết cấu và trình độ phát triển của cơ cấu kinh tế quốc gia."
            },
            {
                question: "Nội dung liên minh nào được coi là cơ sở vững chắc nhất, giữ vai trò quyết định cho sự tồn tại và phát triển của liên minh công - nông - trí thức?",
                options: [
                    "Liên minh về chính trị",
                    "Liên minh về văn hóa",
                    "Liên minh về kinh tế",
                    "Liên minh về đối ngoại quốc tế"
                ],
                correctAnswer: 2,
                explanation: "Liên minh về kinh tế thỏa mãn lợi ích vật chất của các bên, tạo ra sự liên kết sản xuất thực tế nên giữ vai trò quyết định và làm nền tảng vững chắc nhất."
            },
            {
                question: "Vì sao trí thức không được coi là một giai cấp xã hội độc lập?",
                options: [
                    "Vì họ không có tổ chức công đoàn riêng biệt",
                    "Vì họ không đại diện cho một phương thức sản xuất riêng biệt và không có hệ tư tưởng độc lập",
                    "Vì số lượng của họ quá ít so với công nhân và nông dân",
                    "Vì họ chỉ phục vụ lợi ích của giai cấp tư sản"
                ],
                correctAnswer: 1,
                explanation: "Trí thức là một tầng lớp xã hội đặc biệt, xuất thân từ các giai cấp khác nhau, không có quan hệ sở hữu tư liệu sản xuất riêng độc lập nên hệ tư tưởng của họ phụ thuộc giai cấp lãnh đạo xã hội."
            },
            {
                question: "Khối đại đoàn kết toàn dân tộc ở Việt Nam hiện nay lấy lực lượng nào làm nền tảng?",
                options: [
                    "Liên minh giữa giai cấp công nhân với nông dân và trí thức",
                    "Sự đoàn kết giữa các doanh nghiệp tư nhân lớn",
                    "Sự hỗ trợ của kiều bào nước ngoài",
                    "Khối liên kết giữa các tôn giáo lớn"
                ],
                correctAnswer: 0,
                explanation: "Khối đại đoàn kết toàn dân tộc luôn lấy khối liên minh công - nông - trí thức làm nền tảng nòng cốt vững chắc dưới sự lãnh đạo của Đảng Cộng sản."
            }
        ]
    },
    {
        id: 6,
        title: "Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ",
        shortTitle: "Dân tộc & Tôn giáo",
        description: "Trình bày vấn đề dân tộc, tôn giáo và mối quan hệ phức tạp giữa chúng dưới góc nhìn xã hội chủ nghĩa.",
        objectives: {
            knowledge: "Nắm vững khái niệm dân tộc, tôn giáo; nội dung cương lĩnh dân tộc của Lênin và các nguyên lý giải quyết vấn đề tôn giáo trong thời kỳ quá độ.",
            skills: "Đánh giá đúng đắn các chính sách dân tộc, tôn giáo của Đảng và Nhà nước Việt Nam; nhận diện âm mưu lợi dụng dân tộc, tôn giáo chống phá cách mạng.",
            attitude: "Tôn trọng truyền thống văn hóa của các dân tộc; tôn trọng quyền tự do tín ngưỡng tôn giáo lành mạnh của mọi người dân."
        },
        sections: [
            {
                title: "Vấn đề dân tộc và Cương lĩnh dân tộc của V.I.Lênin",
                summary: "Dân tộc là hình thức cộng đồng người ổn định nhất được hình thành trong lịch sử. Giải quyết vấn đề dân tộc đúng đắn là chìa khóa ổn định chính trị quốc gia.",
                keyPoints: [
                    "Khái niệm dân tộc: Cộng đồng người ổn định, có chung lãnh thổ, ngôn ngữ, nền kinh tế và tâm lý văn hóa đặc trưng.",
                    "Bình đẳng dân tộc: Nguyên tắc tối cao, bảo đảm mọi dân tộc lớn nhỏ đều có quyền lợi ngang nhau trước pháp luật, không bị phân biệt đối xử.",
                    "Quyền tự quyết dân tộc: Quyền tự quyết định con đường phát triển kinh tế, chính trị, văn hóa của dân tộc mình (tự phân lập hoặc liên hiệp)."
                ],
                takeaway: "Cương lĩnh dân tộc của Lênin (Bình đẳng, Tự quyết, Liên hiệp) là cơ sở khoa học tối cao cho chính sách giải phóng dân tộc của các nước XHCN."
            },
            {
                title: "Vấn đề tôn giáo và nguyên tắc giải quyết tôn giáo",
                summary: "Tôn giáo là một hiện tượng xã hội tồn tại lâu dài trong lịch sử. Trong thời kỳ quá độ, tôn giáo vẫn tồn tại khách quan do nhiều nguyên nhân kinh tế, nhận thức, tâm lý.",
                keyPoints: [
                    "Bản chất tôn giáo: Là hình thái ý thức xã hội phản ánh một cách hư ảo các lực lượng tự nhiên và xã hội chi phối con người vào thế giới thần thánh.",
                    "Tự do tín ngưỡng: Bảo đảm quyền tự do theo hoặc không theo tôn giáo của công dân, tôn trọng các cơ sở thờ tự hợp pháp.",
                    "Nguyên tắc khắc phục tôn giáo: Cần giải quyết mặt chính trị và mặt tư tưởng, giáo dục khoa học, không dùng mệnh lệnh hành chính cưỡng chế xóa bỏ tôn giáo."
                ],
                takeaway: "Giải quyết vấn đề tôn giáo đòi hỏi sự kiên trì, tôn trọng tự do tín ngưỡng lành mạnh kết hợp giáo dục dân trí và phòng chống mê tín dị đoan."
            },
            {
                title: "Chính sách dân tộc, tôn giáo và mối quan hệ tại Việt Nam",
                summary: "Việt Nam là quốc gia đa dân tộc, đa tôn giáo. Đại đoàn kết dân tộc và tôn giáo đồng hành cùng dân tộc là quan điểm nhất quán của Đảng và Nhà nước.",
                keyPoints: [
                    "Chính sách dân tộc: 'Bình đẳng, đoàn kết, tương trợ và cùng nhau phát triển giữa các dân tộc anh em'.",
                    "Chính sách tôn giáo: Tôn trọng quyền tự do tín ngưỡng tôn giáo của nhân dân; hoạt động tôn giáo phải tuân thủ hiến pháp và pháp luật; bài trừ lợi dụng tôn giáo phá hoại đất nước.",
                    "Mối quan hệ dân tộc - tôn giáo: Các dân tộc thiểu số đa số theo các tôn giáo đặc thù, đòi hỏi chính sách kết hợp tinh tế và đồng bộ giữa dân tộc và tôn giáo."
                ],
                takeaway: "Giữ vững khối đại đoàn kết các dân tộc và tôn giáo là bức tường thành vững chắc chống lại mọi âm mưu chia rẽ đất nước."
            }
        ],
        keyTerms: [
            {
                term: "Dân tộc (Nation)",
                definition: "Hình thức cộng đồng người ổn định, hình thành từ sự gắn kết lãnh thổ, ngôn ngữ, đời sống kinh tế và đặc trưng văn hóa tâm lý xã hội.",
                memoryHint: "Cộng đồng người gắn liền với quốc gia và ý thức tự chủ chính trị."
            },
            {
                term: "Bình đẳng dân tộc",
                definition: "Nguyên tắc quyền lợi bình đẳng trước pháp luật của mọi dân tộc, không phân biệt đa số hay thiểu số, trình độ phát triển.",
                memoryHint: "Quyền ngang nhau của mọi dân tộc, cốt lõi của Cương lĩnh Lênin."
            },
            {
                term: "Tín ngưỡng",
                definition: "Niềm tin tin cậy vào một thế lực siêu nhiên, thần thánh mang tính thiêng liêng giúp nâng đỡ tinh thần con người.",
                memoryHint: "Niềm tin tâm linh thiêng liêng (chưa cấu thành tổ chức tôn giáo chặt chẽ)."
            },
            {
                term: "Tự do tín ngưỡng, tôn giáo",
                definition: "Quyền của công dân tự do theo một tôn giáo nào đó hoặc không theo tôn giáo nào, không ai được cưỡng bức hoặc phân biệt đối xử.",
                memoryHint: "Quyền tự do lựa chọn đức tin tâm linh cá nhân hợp pháp."
            },
            {
                term: "Liên hiệp công nhân các dân tộc",
                definition: "Nguyên tắc đoàn kết giai cấp công nhân toàn thế giới vượt qua ranh giới quốc gia dân tộc để đấu tranh chống chủ nghĩa đế quốc.",
                memoryHint: "Nội dung liên kết giai cấp trong Cương lĩnh dân tộc của Lênin."
            }
        ],
        vietnamConnection: "Việt Nam hiện có 54 dân tộc anh em sinh sống hòa thuận và hàng chục tôn giáo lớn được nhà nước công nhận pháp nhân hoạt động. Nhà nước luôn ưu tiên phát triển cơ sở hạ tầng vùng sâu vùng xa (Chương trình Mục tiêu quốc gia vùng đồng bào dân tộc thiểu số) và tạo điều kiện cho các ngày lễ tôn giáo lớn diễn ra an toàn.",
        essayQuestions: [
            "Hãy trình bày nội dung Cương lĩnh dân tộc của V.I.Lênin và ý nghĩa đối với nước ta.",
            "Phân tích nguyên nhân tồn tại của tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội.",
            "Đảng và Nhà nước ta đấu tranh chống việc lợi dụng vấn đề dân tộc và tôn giáo như thế nào?"
        ],
        examTips: [
            "Cương lĩnh dân tộc của Lenin gồm 3 ý: 'Các dân tộc hoàn toàn bình đẳng; các dân tộc được quyền tự quyết; liên hiệp công nhân tất cả các dân tộc'.",
            "Phân biệt rõ: Quyền tự quyết dân tộc không đồng nghĩa với quyền đòi ly khai vô điều kiện một cách vô chính phủ, mà phải phục vụ lợi ích giai cấp công nhân.",
            "Tôn giáo là hiện tượng xã hội có tính lịch sử (sẽ biến mất khi điều kiện kinh tế xã hội và nhận thức loài người đạt trình độ cao khoa học).",
            "Mặt chính trị của tôn giáo liên quan đến việc thế lực thù địch lợi dụng tôn giáo chống phá cách mạng; mặt tư tưởng liên quan đến đức tin và nhận thức của giáo dân.",
            "Việt Nam có 53 dân tộc thiểu số và 1 dân tộc đa số là Kinh."
        ],
        quizzes: [
            {
                question: "Nội dung nào trong Cương lĩnh dân tộc của V.I.Lênin được coi là cơ sở để thực hiện quyền bình đẳng giữa các dân tộc?",
                options: [
                    "Các dân tộc hoàn toàn bình đẳng",
                    "Các dân tộc được quyền tự quyết",
                    "Liên hiệp công nhân tất cả các dân tộc",
                    "Đồng hóa các dân tộc nhỏ"
                ],
                correctAnswer: 0,
                explanation: "Nguyên tắc 'Các dân tộc hoàn toàn bình đẳng' là cơ sở pháp lý và chính trị cốt lõi để xóa bỏ sự áp bức dân tộc, bảo đảm mọi dân tộc đều có tư cách ngang nhau."
            },
            {
                question: "Quyền tự quyết dân tộc trong Cương lĩnh dân tộc của Lênin được hiểu như thế nào?",
                options: [
                    "Quyền tự quyết định con đường phát triển mà không phụ thuộc vào tình hình thế giới",
                    "Quyền tự quyết định con đường chính trị của dân tộc mình, bao gồm quyền phân lập thành quốc gia riêng hoặc liên hiệp với dân tộc khác",
                    "Quyền tuyệt đối ly khai bất cứ lúc nào bất chấp hiến pháp quốc gia liên bang",
                    "Quyền từ chối tham gia các liên kết quốc tế"
                ],
                correctAnswer: 1,
                explanation: "Quyền tự quyết bao gồm tự quyết định thể chế chính trị, quyền tự phân lập (tách ra thành lập nước riêng) hoặc tự nguyện liên hiệp với các dân tộc khác trên cơ sở bình đẳng."
            },
            {
                question: "Một trong những nguyên nhân chính khiến tôn giáo vẫn tồn tại khách quan trong thời kỳ quá độ là gì?",
                options: [
                    "Do sự phát triển mạnh mẽ của khoa học kỹ thuật hiện đại",
                    "Do nguyên nhân nhận thức (khoa học chưa giải thích hết mọi hiện tượng thiên nhiên và xã hội)",
                    "Do sự bắt buộc tuyệt đối của pháp luật nhà nước xã hội chủ nghĩa",
                    "Do nhu cầu xuất khẩu văn hóa của các nước phát triển"
                ],
                correctAnswer: 1,
                explanation: "Về nhận thức, trong thời kỳ quá độ, trình độ dân trí chưa đồng đều và khoa học chưa giải đáp hết các câu hỏi sinh tử hay thiên tai ngẫu nhiên, tạo đất sống cho tôn giáo."
            },
            {
                question: "Để giải quyết vấn đề tôn giáo trong thời kỳ quá độ, chủ nghĩa Mác - Lênin yêu cầu phải phân biệt hai mặt nào?",
                options: [
                    "Mặt kinh tế và mặt chính trị",
                    "Mặt chính trị và mặt tư tưởng",
                    "Mặt lịch sử và mặt địa lý",
                    "Mặt đức tin và mặt lễ hội"
                ],
                correctAnswer: 1,
                explanation: "Cần phân biệt mặt chính trị (đối phó với âm mưu phản cách mạng đội lốt tôn giáo) và mặt tư tưởng (giải quyết niềm tin, nhu cầu văn hóa lành mạnh của quần chúng giáo dân)."
            },
            {
                question: "Chính sách nhất quán của Đảng và Nhà nước Việt Nam về tôn giáo là gì?",
                options: [
                    "Cấm đoán tuyệt đối mọi hình thức thờ cúng tôn giáo",
                    "Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo và không tín ngưỡng tôn giáo của mọi công dân",
                    "Khuyến khích mỗi công dân bắt buộc phải theo một tôn giáo cụ thể",
                    "Ưu tiên phát triển các tôn giáo ngoại nhập hơn tôn giáo nội sinh"
                ],
                correctAnswer: 1,
                explanation: "Hiến pháp Việt Nam khẳng định tôn trọng tự do tín ngưỡng của người dân: được tự do theo hoặc không theo, mọi tôn giáo đều bình đẳng trước pháp luật."
            }
        ]
    },
    {
        id: 7,
        title: "Vấn đề gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội",
        shortTitle: "Vấn đề gia đình",
        description: "Làm rõ khái niệm, vị trí, chức năng của gia đình và định hướng xây dựng gia đình mới Việt Nam.",
        objectives: {
            knowledge: "Nắm vững khái niệm, vị trí, chức năng của gia đình; hiểu rõ các cơ sở xây dựng gia đình mới trong thời kỳ quá độ lên chủ nghĩa xã hội.",
            skills: "Phân tích được sự biến đổi của gia đình Việt Nam hiện nay; đề xuất được các giải pháp xây dựng gia đình văn hóa tiến bộ.",
            attitude: "Có trách nhiệm xây dựng gia đình hạnh phúc; tôn trọng bình đẳng giới; bài trừ bạo lực gia đình và các hủ tục lạc hậu."
        },
        sections: [
            {
                title: "Khái niệm, vị trí và chức năng của gia đình",
                summary: "Gia đình là một cộng đồng người đặc biệt được hình thành trên cơ sở hôn nhân và huyết thống, giữ vai trò là tế bào của xã hội và cái nôi nuôi dưỡng con người.",
                keyPoints: [
                    "Khái niệm gia đình: Liên kết bởi quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng, gắn bó bởi quyền lợi và nghĩa vụ pháp lý đạo đức chung.",
                    "Vị trí của gia đình: Là tế bào của xã hội; cầu nối giữa cá nhân và xã hội; cái nôi ban đầu hình thành nhân cách con người.",
                    "Chức năng đặc thù: Tái sản xuất ra con người (chỉ gia đình mới có thể thực hiện một cách tự nhiên, bảo tồn nòi giống)."
                ],
                takeaway: "Gia đình khỏe mạnh thì xã hội mới phồn vinh; bảo vệ gia đình là bảo vệ động lực phát triển bền vững của quốc gia."
            },
            {
                title: "Cơ sở xây dựng gia đình mới trong thời kỳ quá độ",
                summary: "Xây dựng gia đình mới xã hội chủ nghĩa dựa trên bốn cơ sở vững chắc về kinh tế, chính trị, văn hóa và chế độ hôn nhân tiến bộ.",
                keyPoints: [
                    "Cơ sở kinh tế - xã hội: Thiết lập chế độ sở hữu công cộng về tư liệu sản xuất, giải phóng phụ nữ khỏi gánh nặng kinh tế lệ thuộc.",
                    "Cơ sở chính trị - xã hội: Thiết lập nhà nước của nhân dân, ban hành Luật Hôn nhân và Gia đình để bảo vệ quyền lợi các thành viên.",
                    "Hôn nhân tiến bộ: Hôn nhân tự nguyện, một vợ một chồng, vợ chồng bình đẳng và được pháp luật thừa nhận bảo hộ."
                ],
                takeaway: "Gia đình mới xã hội chủ nghĩa giải phóng con người khỏi sự ràng buộc kinh tế áp bức, xây dựng tình yêu thương dựa trên sự bình đẳng thực sự."
            },
            {
                title: "Sự biến đổi và định hướng xây dựng gia đình Việt Nam",
                summary: "Gia đình Việt Nam hiện nay đang chuyển dịch từ mô hình truyền thống (tam tứ đại đồng đường) sang mô hình gia đình hạt nhân, đối mặt với cả cơ hội và thách thức.",
                keyPoints: [
                    "Xu hướng quy mô: Gia đình có quy mô nhỏ hơn (ít con hơn), tăng tính độc lập và riêng tư của các thành viên.",
                    "Sự biến đổi chức năng: Chức năng giáo dục chịu sự chia sẻ lớn từ nhà trường và mạng xã hội; chức năng kinh tế chuyển sang tự do kinh doanh.",
                    "Định hướng xây dựng: Xây dựng gia đình 'No ấm, bình đẳng, tiến bộ, hạnh phúc, văn minh' làm mục tiêu chiến lược phát triển con người."
                ],
                takeaway: "Bảo tồn giá trị gia đình truyền thống kết hợp tiếp thu các giá trị hiện đại là chìa khóa xây dựng văn hóa Việt Nam tiên tiến đậm đà bản sắc."
            }
        ],
        keyTerms: [
            {
                term: "Gia đình (Family)",
                definition: "Cộng đồng người đặc biệt gắn kết bởi hôn nhân, huyết thống hoặc nuôi dưỡng, có quyền lợi và nghĩa vụ chung được xã hội và pháp luật thừa nhận.",
                memoryHint: "Tế bào của xã hội, tổ ấm của mỗi cá nhân."
            },
            {
                term: "Tái sản xuất ra con người",
                definition: "Chức năng sinh sản duy trì nòi giống, chăm sóc nuôi dưỡng thành viên mới cung cấp sức lao động cho xã hội.",
                memoryHint: "Chức năng đặc thù, tự nhiên của gia đình, không cơ quan nào thay thế được."
            },
            {
                term: "Hôn nhân tự nguyện, tiến bộ",
                definition: "Chế độ kết hôn xuất phát hoàn toàn từ tình yêu đôi lứa chân chính, tự do lựa chọn bạn đời, không bị ép buộc bởi tiền bạc hay địa vị.",
                memoryHint: "Hôn nhân dựa trên tình yêu tự nguyện của nam và nữ."
            },
            {
                term: "Gia đình hạt nhân",
                definition: "Mô hình gia đình nhỏ chỉ gồm hai thế hệ sinh sống: bố mẹ và con cái chưa trưởng thành.",
                memoryHint: "Gia đình nhỏ phổ biến nhất trong xã hội công nghiệp hiện đại."
            },
            {
                term: "Gia đình văn hóa",
                definition: "Danh hiệu thi đua tại Việt Nam dành cho các gia đình chấp hành tốt pháp luật, hòa thuận, nuôi dạy con ngoan, đóng góp tích cực cho cộng đồng.",
                memoryHint: "Tiêu chuẩn thi đua gia đình gương mẫu tại Việt Nam."
            }
        ],
        vietnamConnection: "Tại Việt Nam, ngày 28 tháng 6 hàng năm được chọn là Ngày Gia đình Việt Nam nhằm tôn vinh các giá trị mái ấm. Đảng và Nhà nước luôn nhấn mạnh công tác gia đình là nhiệm vụ thường xuyên, xây dựng gia đình hạnh phúc là nền tảng để hạn chế các tệ nạn xã hội và bạo lực gia đình.",
        essayQuestions: [
            "Vì sao nói gia đình là tế bào của xã hội? Vị trí đó có ý nghĩa gì đối với việc hoạch định chính sách?",
            "Phân tích các cơ sở xây dựng gia đình mới xã hội chủ nghĩa trong thời kỳ quá độ.",
            "Trình bày những thách thức lớn đối với chức năng giáo dục của gia đình Việt Nam trước sự bùng nổ của mạng xã hội hiện nay."
        ],
        examTips: [
            "Gia đình có 4 chức năng cơ bản, trong đó chức năng sinh sản (tái sản xuất con người) là đặc thù nhất.",
            "Cơ sở kinh tế để xây dựng gia đình mới là chế độ công hữu (xóa bỏ chế độ chiếm hữu tư nhân - nguồn gốc của bất bình đẳng nam nữ trong gia đình cũ).",
            "Nhớ rõ tiêu chí hôn nhân tiến bộ gồm: tự nguyện; một vợ một chồng; vợ chồng bình đẳng (tránh nhầm lẫn với các tiêu chí khác).",
            "Xu hướng biến đổi gia đình Việt Nam hiện nay: quy mô gia đình thu nhỏ lại, số thế hệ cùng sống giảm đi.",
            "Luật Hôn nhân và Gia đình Việt Nam quy định độ tuổi kết hôn hợp pháp hiện nay: Nam từ đủ 20 tuổi, Nữ từ đủ 18 tuổi."
        ],
        quizzes: [
            {
                question: "Theo quan điểm của chủ nghĩa Mác - Lênin, gia đình giữ vị trí nào đối với xã hội?",
                options: [
                    "Là một cơ quan hành chính độc lập",
                    "Là tế bào của xã hội",
                    "Là một tổ chức kinh tế độc quyền",
                    "Là cầu nối duy nhất giữa nhà nước và tôn giáo"
                ],
                correctAnswer: 1,
                explanation: "Gia đình là tế bào xã hội. Xã hội được cấu thành từ các gia đình; gia đình có tốt thì xã hội mới ổn định và phát triển tốt đẹp."
            },
            {
                question: "Chức năng nào dưới đây được coi là chức năng đặc thù và không thể thay thế của gia đình?",
                options: [
                    "Chức năng giáo dục thế hệ trẻ",
                    "Chức năng tái sản xuất ra con người (sinh sản)",
                    "Chức năng kinh tế và tổ chức đời sống vật chất",
                    "Chức năng thỏa mãn nhu cầu tâm sinh lý tình cảm"
                ],
                correctAnswer: 1,
                explanation: "Chức năng sinh sản để duy trì dòng giống và lực lượng lao động cho xã hội là chức năng tự nhiên đặc thù của gia đình mà không một tổ chức nào khác thay thế được."
            },
            {
                question: "Cơ sở kinh tế - xã hội cốt lõi để xây dựng gia đình mới trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                options: [
                    "Sự gia tăng thu nhập cá nhân nhờ xuất khẩu lao động",
                    "Thiết lập chế độ công hữu về các tư liệu sản xuất chủ yếu",
                    "Sự bảo trợ tài chính của các quỹ từ thiện xã hội",
                    "Sự phát triển của thị trường tài chính tín dụng tiêu dùng"
                ],
                correctAnswer: 1,
                explanation: "Thiết lập chế độ công hữu xóa bỏ sự phụ thuộc kinh tế của thành viên này vào thành viên khác trong gia đình (đặc biệt giải phóng phụ nữ khỏi phụ thuộc nam giới)."
            },
            {
                question: "Chế độ hôn nhân tiến bộ xã hội chủ nghĩa bao gồm nội dung nào sau đây?",
                options: [
                    "Kết hôn do cha mẹ sắp đặt để môn đăng hộ đối",
                    "Hôn nhân tự nguyện, một vợ một chồng, vợ chồng bình đẳng trước pháp luật",
                    "Được phép ly hôn tự do không cần tòa án xét duyệt",
                    "Hôn nhân nhằm tích lũy tài sản cho dòng họ"
                ],
                correctAnswer: 1,
                explanation: "Hôn nhân tiến bộ dựa trên tình yêu tự nguyện, một vợ một chồng bền vững và vợ chồng hoàn toàn bình đẳng về quyền lợi, nghĩa vụ trong gia đình."
            },
            {
                question: "Độ tuổi kết hôn hợp pháp theo Luật Hôn nhân và Gia đình Việt Nam hiện hành quy định là bao nhiêu?",
                options: [
                    "Nam từ đủ 18 tuổi, Nữ từ đủ 16 tuổi",
                    "Nam từ đủ 20 tuổi, Nữ từ đủ 18 tuổi",
                    "Cả nam và nữ đều phải từ đủ 22 tuổi",
                    "Không quy định độ tuổi cụ thể"
                ],
                correctAnswer: 1,
                explanation: "Luật Hôn nhân và Gia đình Việt Nam quy định độ tuổi kết hôn hợp pháp: Nam từ đủ 20 tuổi trở lên, Nữ từ đủ 18 tuổi trở lên."
            }
        ]
    }
];

// Dữ liệu Dòng thời gian phát triển của CNXHKH
const TIMELINE_DATA = [
    {
        title: "Tiền đề Kinh tế - Xã hội (Đầu thế kỷ XIX)",
        icon: "fa-solid fa-industry",
        desc: "Sự phát triển bùng nổ của phương thức sản xuất tư bản chủ nghĩa và nền đại công nghiệp làm bộc lộ mâu thuẫn giai cấp sâu sắc giữa Vô sản và Tư sản, bùng nổ phong trào hiến chương Anh, khởi nghĩa tơ Lyon Pháp."
    },
    {
        title: "Tiền đề Khoa học Tự nhiên (Đầu thế kỷ XIX)",
        icon: "fa-solid fa-flask",
        desc: "Ba phát kiến lớn: Học thuyết tế bào, Học thuyết tiến hóa và Định luật bảo toàn chuyển hóa năng lượng đập tan thế giới quan siêu hình, đặt nền tảng duy vật khoa học biện chứng."
    },
    {
        title: "Tiền đề Tư tưởng Lý luận trực tiếp",
        icon: "fa-solid fa-brain",
        desc: "Chủ nghĩa xã hội không tưởng phê phán Pháp (Saint-Simon, Fourier, Owen) phê phán chế độ tư bản sâu sắc, phác thảo xã hội tương lai công bằng nhưng thiếu phương pháp khoa học."
    },
    {
        title: "Vai trò của C.Mác và Ph.Ăngghen (1840s)",
        icon: "fa-solid fa-pen-nib",
        desc: "Ba phát kiến vĩ đại: Chủ nghĩa duy vật lịch sử, Học thuyết giá trị thặng dư, và Học thuyết sứ mệnh lịch sử giai cấp công nhân đưa chủ nghĩa xã hội trở thành khoa học chính thức."
    },
    {
        title: "Tuyên ngôn của Đảng Cộng sản (2/1848)",
        icon: "fa-solid fa-scroll",
        desc: "Tác phẩm lý luận vĩ đại của Marx và Engels xuất bản, là cương lĩnh chính trị chính thức đầu tiên, đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học trên trường quốc tế."
    },
    {
        title: "V.I.Lênin vận dụng & phát triển (Đầu thế kỷ XX)",
        icon: "fa-solid fa-landmark",
        desc: "Lenin bảo vệ chủ nghĩa Mác chống xét lại, phát triển lý luận trong thời kỳ đế quốc chủ nghĩa và lãnh đạo thắng lợi Cách mạng Tháng Mười Nga (1917) lập nên Nhà nước XHCN đầu tiên."
    },
    {
        title: "Thử nghiệm mô hình & Đổi mới hiện đại",
        icon: "fa-solid fa-arrows-spin",
        desc: "Hệ thống XHCN thế giới hình thành và trải qua khủng hoảng Đông Âu những năm 1990, dẫn tới sự điều chỉnh mô hình sang định hướng thực tiễn, cải cách sáng tạo ở Trung Quốc và Việt Nam."
    },
    {
        title: "Vận dụng Đổi mới tại Việt Nam (1986 - Nay)",
        icon: "fa-solid fa-star",
        desc: "Đảng Cộng sản Việt Nam khởi xướng công cuộc Đổi mới năm 1986, định hình nền kinh tế thị trường định hướng xã hội chủ nghĩa, kiên định con đường đi lên chủ nghĩa xã hội bỏ qua CNTB."
    }
];

// Dữ liệu Sơ đồ tư duy toàn môn học (Concept Map)
const CONCEPT_MAP_DATA = [
    {
        id: "m1",
        label: "Nhập môn CNXHKH",
        targetTab: "chapters",
        chapterId: 1,
        desc: "Nghiên cứu quy luật chính trị - xã hội của quá trình chuyển biến từ CNTB lên CNXH.",
        keywords: ["Mác-Ăngghen", "Lênin", "1848", "Quy luật chính trị - xã hội"]
    },
    {
        id: "m2",
        label: "Giai cấp công nhân",
        targetTab: "chapters",
        chapterId: 2,
        desc: "Lực lượng tiên phong, đại biểu cho phương thức sản xuất tiến tiến, có sứ mệnh xóa bỏ bóc lột.",
        keywords: ["Sứ mệnh lịch sử", "Đảng Cộng sản", "Đại công nghiệp", "Trí thức hóa"]
    },
    {
        id: "m3",
        label: "Thời kỳ quá độ",
        targetTab: "chapters",
        chapterId: 3,
        desc: "Thời kỳ cải biến cách mạng sâu sắc, đan xen giữa cũ và mới, quá độ gián tiếp ở Việt Nam.",
        keywords: ["Bỏ qua CNTB", "Kinh tế thị trường", "8 đặc trưng", "Kinh tế nhiều thành phần"]
    },
    {
        id: "m4",
        label: "Dân chủ & Nhà nước XHCN",
        targetTab: "chapters",
        chapterId: 4,
        desc: "Hình thức tổ chức bảo đảm quyền lực thực sự thuộc về nhân dân, quản lý xã hội bằng luật pháp.",
        keywords: ["Pháp quyền XHCN", "Thống nhất quyền lực", "Dân biết, dân bàn...", "Dân chủ trực tiếp"]
    },
    {
        id: "m5",
        label: "Cơ cấu giai cấp & Liên minh",
        targetTab: "chapters",
        chapterId: 5,
        desc: "Xây dựng liên minh công - nông - trí thức làm động lực nòng cốt xây dựng đất nước.",
        keywords: ["Liên minh kinh tế", "Doanh nhân", "Nông dân trí thức", "Đại đoàn kết"]
    },
    {
        id: "m6",
        label: "Dân tộc & Tôn giáo",
        targetTab: "chapters",
        chapterId: 6,
        desc: "Giải quyết vấn đề dân tộc tự quyết, tôn trọng tín ngưỡng tôn giáo, chống chia rẽ khối đoàn kết.",
        keywords: ["Cương lĩnh Lênin", "Bình đẳng dân tộc", "Tự do tín ngưỡng", "Tôn giáo đồng hành"]
    },
    {
        id: "m7",
        label: "Gia đình XHCN",
        targetTab: "chapters",
        chapterId: 7,
        desc: "Xây dựng tế bào xã hội vững mạnh dựa trên hôn nhân tự nguyện, tiến bộ và bình đẳng.",
        keywords: ["Tế bào xã hội", "Hôn nhân tiến bộ", "Sinh sản nòi giống", "Gia đình văn hóa"]
    }
];

// Lớp dữ liệu micro-learning cho trải nghiệm MLN131 Learning Journey.
// Dữ liệu học thuật cũ vẫn được giữ nguyên; phần này chỉ bổ sung field mới để render ngắn gọn hơn.
const MICRO_LEARNING_DATA = [
    {
        id: 1,
        stationName: "Khởi nguồn lý luận",
        centralQuestion: "Vì sao chủ nghĩa xã hội từ không tưởng trở thành một khoa học?",
        oneLineSummary: "Chương này mở ra nguồn gốc, điều kiện ra đời và ý nghĩa của CNXHKH.",
        whyItMatters: "Giúp sinh viên hiểu vì sao môn học có cơ sở khoa học, không chỉ là khẩu hiệu hay niềm tin chung chung.",
        keywords: ["1848", "Mác - Ăngghen", "Không tưởng", "Giai cấp công nhân", "Quy luật"],
        quickUnderstand: "Nếu CNXH không tưởng là ước mơ về xã hội công bằng, CNXHKH giải thích vì sao xã hội ấy có thể hình thành, lực lượng nào thực hiện và quy luật nào dẫn đường.",
        keyIdeas: [
            {
                title: "Bối cảnh lịch sử",
                shortExplain: "Đại công nghiệp tư bản tạo ra mâu thuẫn xã hội sâu sắc và phong trào đấu tranh của giai cấp vô sản.",
                visualHint: "Nhà máy - đô thị - đấu tranh"
            },
            {
                title: "Tiền đề tư tưởng",
                shortExplain: "Mác và Ăngghen kế thừa có phê phán các nguồn lý luận trước đó để xây dựng học thuyết mới.",
                visualHint: "Kế thừa - phê phán - vượt lên"
            },
            {
                title: "Từ mơ ước đến khoa học",
                shortExplain: "Ba phát kiến vĩ đại làm rõ quy luật xã hội và vai trò lịch sử của giai cấp công nhân.",
                visualHint: "Quy luật - lực lượng - con đường"
            }
        ],
        colorTheme: {
            accent: "#38BDF8",
            softBg: "rgba(56, 189, 248, 0.12)",
            border: "rgba(56, 189, 248, 0.25)",
            iconBg: "rgba(56, 189, 248, 0.15)"
        },
        icon: "fa-solid fa-compass",
        planet: {
            number: "01",
            name: "Hành tinh Khởi nguồn",
            englishName: "Origin Planet",
            visualMotif: "flow",
            orbitLabel: "Planet 01"
        },
        conceptModel: {
            type: "flow",
            title: "Từ không tưởng đến khoa học",
            description: "Dòng chảy lý luận đưa xã hội học từ ước mơ thành hiện thực dựa trên cơ sở khoa học.",
            nodes: [
                { id: "n1", title: "Khát vọng công bằng", description: "Các tư tưởng xã hội không tưởng phê phán xuất hiện nhưng thiếu con đường thực tiễn.", icon: "fa-solid fa-cloud-sun" },
                { id: "n2", title: "Tiền đề kinh tế - xã hội", description: "Sự phát triển của đại công nghiệp và các cuộc đấu tranh của giai cấp vô sản làm bộc lộ mâu thuẫn.", icon: "fa-solid fa-industry" },
                { id: "n3", title: "Tiền đề lý luận & khoa học", description: "Triết học cổ điển Đức, KTCT học Anh và 3 phát kiến khoa học tự nhiên lớn tạo nền tảng tư duy duy vật.", icon: "fa-solid fa-key" },
                { id: "n4", title: "Sáng lập CNXHKH", description: "C.Mác và Ph.Ăngghen hệ thống hóa lý luận bằng các phát kiến vĩ đại, xuất bản Tuyên ngôn năm 1848.", icon: "fa-solid fa-file-signature" }
            ],
            connections: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" }
            ]
        },
        media: {
            title: "CNXHKH ra đời trong bối cảnh lịch sử nào?",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/Feo7EN2vkmM/hqdefault.jpg",
            description: "Xem video tóm tắt bối cảnh cách mạng công nghiệp thế kỷ XIX và sự trỗi dậy của giai cấp vô sản để hiểu sâu lý do ra đời của môn học.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/Feo7EN2vkmM"
        },
        caseStudy: {
            title: "Cách tiếp cận khoa học trong phân tích đời sống thực tế",
            situation: "Nhiều dự án thiện nguyện mong muốn hỗ trợ người nghèo bền vững nhưng chỉ thực hiện cứu trợ khẩn cấp nhất thời, thiếu nghiên cứu cơ cấu sản xuất và sinh kế thực tế của vùng.",
            question: "Làm thế nào để sinh viên áp dụng phương pháp luận khoa học (đi từ điều kiện kinh tế thực tế và lực lượng nòng cốt) để xây dựng một giải pháp xã hội bền vững?",
            analysisHints: [
                "Xác định nguyên nhân gốc rễ dựa trên điều kiện kinh tế - xã hội của địa phương.",
                "Tìm kiếm và phát huy vai trò chủ thể của chính lực lượng lao động tại chỗ.",
                "Thiết lập giải pháp đi kèm các chỉ số đánh giá thực tế khách quan."
            ]
        },
        comparison: {
            title: "CNXH Không tưởng vs CNXH Khoa học",
            keyDifference: "Phương pháp luận và Lực lượng thực hiện",
            left: {
                label: "Chủ nghĩa xã hội không tưởng",
                points: [
                    "Phê phán sâu sắc bản chất bóc lột của CNTB nhưng bằng lăng kính nhân văn cảm tính.",
                    "Chưa chỉ ra được quy luật kinh tế - xã hội khách quan dẫn đến sự thay thế của các hình thái xã hội.",
                    "Chưa xác định được lực lượng xã hội tiên phong có khả năng lãnh đạo cách mạng xóa bỏ áp bức."
                ]
            },
            right: {
                label: "Chủ nghĩa xã hội khoa học",
                points: [
                    "Chỉ ra con đường cách mạng xã hội thực tiễn để giải phóng giai cấp và nhân loại.",
                    "Phát hiện quy luật vận động khách quan của lịch sử từ sự phát triển của phương thức sản xuất.",
                    "Xác định rõ sứ mệnh lịch sử thế giới của giai cấp công nhân hiện đại."
                ]
            }
        }
    },
    {
        id: 2,
        stationName: "Giai cấp công nhân",
        centralQuestion: "Vì sao giai cấp công nhân được xem là lực lượng có sứ mệnh lịch sử?",
        oneLineSummary: "Chương này giải thích vị trí, vai trò và sứ mệnh của giai cấp công nhân trong xã hội hiện đại.",
        whyItMatters: "Giúp người học hiểu hạt nhân lực lượng của cách mạng xã hội chủ nghĩa và cách liên hệ với công nhân Việt Nam hôm nay.",
        keywords: ["Đại công nghiệp", "Sứ mệnh", "Đảng Cộng sản", "Giá trị thặng dư", "Trí thức hóa"],
        quickUnderstand: "Giai cấp công nhân không chỉ là người lao động trong nhà máy. Trong lý luận Mác - Lênin, họ đại diện cho lực lượng sản xuất hiện đại và có khả năng tổ chức xã hội mới.",
        keyIdeas: [
            {
                title: "Vị trí kinh tế",
                shortExplain: "Công nhân gắn với nền đại công nghiệp và phương thức sản xuất có tính xã hội hóa cao.",
                visualHint: "Máy móc - dây chuyền - hợp tác"
            },
            {
                title: "Sứ mệnh lịch sử",
                shortExplain: "Nhiệm vụ cốt lõi là xóa bỏ áp bức bóc lột, xây dựng xã hội mới và giải phóng con người.",
                visualHint: "Giải phóng - xây dựng - phát triển"
            },
            {
                title: "Nhân tố lãnh đạo",
                shortExplain: "Đảng Cộng sản là nhân tố chủ quan quyết định để giai cấp công nhân hoàn thành sứ mệnh.",
                visualHint: "Tổ chức - lý luận - hành động"
            }
        ],
        colorTheme: {
            accent: "#DC2626",
            softBg: "rgba(220, 38, 38, 0.12)",
            border: "rgba(220, 38, 38, 0.25)",
            iconBg: "rgba(220, 38, 38, 0.15)"
        },
        icon: "fa-solid fa-helmet-safety",
        planet: {
            number: "02",
            name: "Hành tinh Giai cấp công nhân",
            englishName: "Worker Class Planet",
            visualMotif: "network",
            orbitLabel: "Planet 02"
        },
        conceptModel: {
            type: "network",
            title: "Sứ mệnh lịch sử của giai cấp công nhân",
            description: "Mạng lưới chòm sao kết nối các nhân tố quy định sứ mệnh lịch sử.",
            nodes: [
                { id: "n1", title: "Địa vị kinh tế - xã hội", description: "Đại biểu cho lực lượng sản xuất tiên tiến, làm việc trong nền sản xuất có tính xã hội hóa cao.", icon: "fa-solid fa-industry" },
                { id: "n2", title: "Đặc điểm chính trị - xã hội", description: "Tính tổ chức, kỷ luật cao, mang tinh thần cách mạng triệt để và đoàn kết quốc tế.", icon: "fa-solid fa-shield-halved" },
                { id: "n3", title: "Nhân tố chủ quan", description: "Số lượng, chất lượng giai cấp tăng lên và mức độ giác ngộ lý luận chính trị xã hội.", icon: "fa-solid fa-graduation-cap" },
                { id: "n4", title: "Đảng Cộng sản lãnh đạo", description: "Đội tiên phong chính trị, hạt nhân quy tụ và dẫn đường cho phong trào đấu tranh đi đến thắng lợi.", icon: "fa-solid fa-flag" },
                { id: "n5", title: "Liên minh giai cấp", description: "Liên kết chặt chẽ với giai cấp nông dân và các tầng lớp lao động khác để tạo sức mạnh tổng hợp.", icon: "fa-solid fa-people-group" }
            ],
            connections: [
                { from: "n1", to: "n3" },
                { from: "n2", to: "n3" },
                { from: "n4", to: "n3" },
                { from: "n5", to: "n4" }
            ]
        },
        media: {
            title: "Giai cấp công nhân trong thế kỷ XXI",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/AFSWDL0Iwo0/hqdefault.jpg",
            description: "Khám phá vai trò của công nhân tri thức, lao động kỹ thuật cao và công nghệ số trong thời đại tự động hóa và toàn cầu hóa hiện nay.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/AFSWDL0Iwo0"
        },
        caseStudy: {
            title: "Nâng cao kỹ năng và 'trí thức hóa' công nhân Việt Nam",
            situation: "Tại các trung tâm công nghiệp lớn như Bình Dương, Bắc Ninh, làn sóng tự động hóa và chuyển đổi số đang đặt ra yêu cầu cấp bách: công nhân phải nâng cao trình độ tay nghề, chuyển sang vận hành thiết bị công nghệ cao thay vì lao động thủ công đơn giản.",
            question: "Làm thế nào để đẩy nhanh tiến trình trí thức hóa công nhân nước ta nhằm đáp ứng yêu cầu công nghiệp hóa, hiện đại hóa hiện nay?",
            analysisHints: [
                "Đổi mới chương trình và liên kết đào tạo giữa cơ sở giáo dục nghề nghiệp và doanh nghiệp.",
                "Tăng cường trang bị kỹ năng số, tác phong công nghiệp và tinh thần tự học của người lao động.",
                "Chính sách đãi ngộ, tôn vinh và hỗ trợ của Nhà nước đối với lao động kỹ thuật cao."
            ]
        }
    },
    {
        id: 3,
        stationName: "Con đường quá độ",
        centralQuestion: "Vì sao quá độ lên chủ nghĩa xã hội là một quá trình lâu dài và phức tạp?",
        oneLineSummary: "Chương này giúp hình dung con đường chuyển biến từ xã hội cũ sang xã hội mới.",
        whyItMatters: "Giúp sinh viên hiểu vì sao Việt Nam có thể lựa chọn con đường quá độ đặc thù và vì sao quá trình này cần nhiều bước.",
        keywords: ["Quá độ", "Bỏ qua CNTB", "Kinh tế nhiều thành phần", "Đổi mới", "8 đặc trưng"],
        quickUnderstand: "Thời kỳ quá độ là giai đoạn vừa xây cái mới, vừa cải biến cái cũ. Vì thế nó có nhiều thành phần kinh tế, nhiều mâu thuẫn và cần định hướng lâu dài.",
        keyIdeas: [
            {
                title: "Một thời kỳ chuyển tiếp",
                shortExplain: "Xã hội không đổi ngay lập tức mà đi qua giai đoạn cải biến sâu sắc trên nhiều lĩnh vực.",
                visualHint: "Cũ - mới - chuyển hóa"
            },
            {
                title: "Đặc thù Việt Nam",
                shortExplain: "Việt Nam quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa với nhiều bước phát triển trung gian.",
                visualHint: "Đổi mới - hội nhập - định hướng"
            },
            {
                title: "Xây nền tảng mới",
                shortExplain: "Mục tiêu là tạo cơ sở kinh tế, chính trị, văn hóa và con người cho xã hội xã hội chủ nghĩa.",
                visualHint: "Kinh tế - chính trị - văn hóa"
            }
        ],
        colorTheme: {
            accent: "#FBBF24",
            softBg: "rgba(251, 191, 36, 0.12)",
            border: "rgba(251, 191, 36, 0.25)",
            iconBg: "rgba(251, 191, 36, 0.15)"
        },
        icon: "fa-solid fa-route",
        planet: {
            number: "03",
            name: "Hành tinh Quá độ",
            englishName: "Transition Planet",
            visualMotif: "roadmap",
            orbitLabel: "Planet 03"
        },
        conceptModel: {
            type: "roadmap",
            title: "Con đường quá độ lên chủ nghĩa xã hội",
            description: "Lộ trình cải biến toàn diện qua các chặng đường phát triển kinh tế, chính trị và xã hội.",
            nodes: [
                { id: "n1", title: "Xuất phát điểm", description: "Bắt đầu từ nước nông nghiệp lạc hậu, chịu hậu quả chiến tranh nặng nề, lựa chọn con đường bỏ qua CNTB.", icon: "fa-solid fa-seedling" },
                { id: "n2", title: "Cải biến chính trị", description: "Thiết lập chính quyền của giai cấp công nhân và nhân dân lao động, giữ vững ổn định chính trị dưới sự lãnh đạo của Đảng.", icon: "fa-solid fa-gavel" },
                { id: "n3", title: "Cải biến kinh tế", description: "Xây dựng cơ cấu kinh tế thị trường định hướng XHCN, phát triển lực lượng sản xuất hiện đại và kinh tế nhiều thành phần.", icon: "fa-solid fa-chart-line" },
                { id: "n4", title: "Cải biến văn hóa - xã hội", description: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc, thực hiện tiến bộ và công bằng xã hội trong từng bước phát triển.", icon: "fa-solid fa-masks-theater" },
                { id: "n5", title: "Xây dựng xong CNXH", description: "Hoàn thành các mục tiêu cốt lõi của CNXH, hướng tới xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh.", icon: "fa-solid fa-trophy" }
            ],
            connections: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n3", to: "n4" },
                { from: "n4", to: "n5" }
            ]
        },
        media: {
            title: "Thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/UjomtvcsMVg/hqdefault.jpg",
            description: "Tìm hiểu vì sao thời kỳ quá độ lại là một quy luật khách quan cho mọi nước đi lên chủ nghĩa xã hội, đặc biệt là các nước quá độ gián tiếp như Việt Nam.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/UjomtvcsMVg"
        },
        caseStudy: {
            title: "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam",
            situation: "Kinh tế thị trường giúp giải phóng sức sản xuất cực kỳ mạnh mẽ, nhưng cũng tạo ra các thách thức như phân hóa giàu nghèo, ô nhiễm môi trường và cạnh tranh khốc liệt. Việt Nam kiên trì mục tiêu tăng trưởng kinh tế phải đi đôi với tiến bộ, công bằng xã hội ngay trong từng bước phát triển.",
            question: "Làm thế nào để nhà nước quản lý hiệu quả kinh tế thị trường mà vẫn đảm bảo tính định hướng XHCN nhân văn?",
            analysisHints: [
                "Sử dụng các công cụ điều tiết vĩ mô và luật pháp của Nhà nước để hạn chế các thất bại của thị trường.",
                "Tập trung đầu tư ngân sách cho y tế, giáo dục, an sinh xã hội để bảo trợ các nhóm yếu thế.",
                "Giữ vững vai trò chủ đạo của kinh tế nhà nước trong những lĩnh vực huyết mạch then chốt."
            ]
        },
        comparison: {
            title: "Quá độ trực tiếp vs Quá độ gián tiếp",
            keyDifference: "Xuất phát điểm kinh tế và Phương thức cải biến",
            left: {
                label: "Quá độ trực tiếp",
                points: [
                    "Bắt đầu từ những nước có chủ nghĩa tư bản phát triển rất cao về mặt công nghiệp.",
                    "Hệ thống cơ sở vật chất, hạ tầng công nghệ và trình độ xã hội hóa sản xuất đã có sẵn.",
                    "Thời kỳ chuyển tiếp diễn ra tương đối ngắn, tập trung chủ yếu vào cải biến quan hệ sở hữu."
                ]
            },
            right: {
                label: "Quá độ gián tiếp",
                points: [
                    "Bắt đầu từ những nước tiền tư bản hoặc chưa qua giai đoạn phát triển tư bản chủ nghĩa hoàn chỉnh.",
                    "Cơ sở hạ tầng kinh tế còn yếu kém, lạc hậu, phải thực hiện nhiệm vụ công nghiệp hóa song song.",
                    "Thời kỳ quá độ kéo dài, phức tạp, đòi hỏi nhiều hình thức kinh tế trung gian đan xen."
                ]
            }
        }
    },
    {
        id: 4,
        stationName: "Dân chủ & Nhà nước",
        centralQuestion: "Dân chủ xã hội chủ nghĩa khác gì với các hình thức dân chủ trước đó?",
        oneLineSummary: "Chương này nối khái niệm dân chủ với nhà nước, quyền lực nhân dân và pháp quyền XHCN.",
        whyItMatters: "Giúp sinh viên phân biệt dân chủ như một giá trị, một chế độ chính trị và một cách tổ chức quyền lực nhà nước.",
        keywords: ["Dân chủ XHCN", "Nhân dân", "Nhà nước", "Pháp quyền", "Quyền lực"],
        quickUnderstand: "Dân chủ XHCN nhấn mạnh quyền lực thuộc về nhân dân. Nhà nước XHCN là công cụ tổ chức quyền lực ấy, quản lý xã hội bằng pháp luật và phục vụ lợi ích nhân dân.",
        keyIdeas: [
            {
                title: "Dân chủ là quyền lực nhân dân",
                shortExplain: "Điểm cốt lõi là nhân dân tham gia, kiểm soát và thụ hưởng quyền lực chính trị.",
                visualHint: "Dân biết - dân bàn - dân làm"
            },
            {
                title: "Nhà nước XHCN",
                shortExplain: "Nhà nước vừa tổ chức quản lý xã hội, vừa bảo đảm định hướng vì lợi ích đại đa số.",
                visualHint: "Luật pháp - quản trị - phục vụ"
            },
            {
                title: "Liên hệ Việt Nam",
                shortExplain: "Nhà nước pháp quyền XHCN Việt Nam gắn quyền lực nhà nước với quyền làm chủ của nhân dân.",
                visualHint: "Pháp quyền - nhân dân - Đảng lãnh đạo"
            }
        ],
        colorTheme: {
            accent: "#10B981",
            softBg: "rgba(16, 185, 129, 0.12)",
            border: "rgba(16, 185, 129, 0.25)",
            iconBg: "rgba(16, 185, 129, 0.15)"
        },
        icon: "fa-solid fa-scale-balanced",
        planet: {
            number: "04",
            name: "Hành tinh Dân chủ & Nhà nước",
            englishName: "Democracy & State Planet",
            visualMotif: "comparison",
            orbitLabel: "Planet 04"
        },
        conceptModel: {
            type: "comparison",
            title: "Cơ cấu tổ chức Dân chủ và Nhà nước",
            description: "So sánh cấu trúc phân định quyền lực và bảo đảm quyền làm chủ của nhân dân.",
            nodes: [
                { id: "n1", title: "Quyền lực của Nhân dân", description: "Bản chất của dân chủ là quyền lực thuộc về toàn thể nhân dân lao động.", icon: "fa-solid fa-users" },
                { id: "n2", title: "Thiết chế Nhà nước", description: "Công cụ quản lý hành chính, tổ chức thực thi các quyết sách vì lợi ích công cộng.", icon: "fa-solid fa-landmark" },
                { id: "n3", title: "Hệ thống Pháp luật", description: "Công cụ bảo đảm trật tự xã hội, thiết lập hành lang pháp lý bảo vệ quyền làm chủ.", icon: "fa-solid fa-book" },
                { id: "n4", title: "Đảng Cộng sản định hướng", description: "Hạt nhân chính trị, lãnh đạo nhà nước và xã hội đi đúng định hướng XHCN.", icon: "fa-solid fa-flag" }
            ],
            connections: [
                { from: "n1", to: "n2" },
                { from: "n2", to: "n3" },
                { from: "n4", to: "n2" }
            ]
        },
        media: {
            title: "Nhà nước pháp quyền XHCN Việt Nam",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/QrW9NZEkjyA/hqdefault.jpg",
            description: "Nắm vững nguyên lý tổ chức bộ máy quyền lực nhà nước tại Việt Nam: thống nhất, phân công, phối hợp và kiểm soát quyền lực giữa các cơ quan nhà nước.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/QrW9NZEkjyA"
        },
        caseStudy: {
            title: "Thực thi Quy chế dân chủ ở cơ sở tại các địa phương",
            situation: "Tại nhiều địa bàn nông thôn xây dựng nông thôn mới, phương châm 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng' đã giúp người dân trực tiếp bàn bạc, quyết định mức đóng góp và trực tiếp kiểm tra việc thi công, chi phí xây dựng các công trình công cộng.",
            question: "Làm thế nào để phát huy tốt vai trò giám sát thực chất của người dân cấp cơ sở, phòng tránh quan liêu và thất thoát ngân sách?",
            analysisHints: [
                "Tăng cường công khai, minh bạch các thông tin tài chính và quy hoạch bằng nhiều hình thức trực quan.",
                "Kiện toàn, nâng cao vai trò hoạt động của Ban Thanh tra nhân dân và Ban giám sát đầu tư cộng đồng.",
                "Ứng dụng công nghệ thông tin giúp người dân gửi ý kiến phản ánh nhanh chóng, bảo mật thông tin người tố cáo."
            ]
        },
        comparison: {
            title: "Dân chủ tư sản vs Dân chủ xã hội chủ nghĩa",
            keyDifference: "Cơ sở xã hội, mục tiêu và cách thức tổ chức quyền lực",
            left: {
                label: "Nền dân chủ tư sản",
                points: [
                    "Cơ sở kinh tế dựa trên chế độ tư hữu tư bản chủ nghĩa về các tư liệu sản xuất.",
                    "Quyền lực chính trị thuộc về giai cấp tư sản, chủ yếu phục vụ cho lợi ích của thiểu số nắm giữ tư bản.",
                    "Tổ chức bộ máy nhà nước theo nguyên tắc tam quyền phân lập để kiểm soát quyền lực giữa các nhóm lợi ích tư sản."
                ]
            },
            right: {
                label: "Nền dân chủ xã hội chủ nghĩa",
                points: [
                    "Cơ sở kinh tế dựa trên chế độ công hữu về các tư liệu sản xuất chủ yếu trong xã hội.",
                    "Quyền lực thuộc về nhân dân lao động, phục vụ cho đại đa số thành viên trong xã hội.",
                    "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp."
                ]
            }
        }
    },
    {
        id: 5,
        stationName: "Cơ cấu xã hội",
        centralQuestion: "Vì sao liên minh các giai cấp, tầng lớp là nền tảng của khối đại đoàn kết?",
        oneLineSummary: "Chương này nhìn xã hội như một cấu trúc đang biến đổi với các giai cấp, tầng lớp và liên minh.",
        whyItMatters: "Giúp người học hiểu vì sao xây dựng xã hội mới cần phối hợp lợi ích của nhiều lực lượng, không chỉ một nhóm riêng lẻ.",
        keywords: ["Cơ cấu", "Liên minh", "Công - nông - trí thức", "Đại đoàn kết", "Lợi ích"],
        quickUnderstand: "Xã hội có nhiều giai cấp và tầng lớp với lợi ích khác nhau. Liên minh đúng giúp tập hợp lực lượng, giảm xung đột và tạo động lực phát triển.",
        keyIdeas: [
            {
                title: "Xã hội luôn biến đổi",
                shortExplain: "Công nghiệp hóa, đô thị hóa và kinh tế thị trường làm cơ cấu xã hội thay đổi liên tục.",
                visualHint: "Tầng lớp - nghề nghiệp - dịch chuyển"
            },
            {
                title: "Liên minh là nền tảng",
                shortExplain: "Liên minh công nhân, nông dân và trí thức tạo trục chính cho khối đại đoàn kết.",
                visualHint: "Công - nông - trí thức"
            },
            {
                title: "Điều hòa lợi ích",
                shortExplain: "Xây dựng liên minh cần gắn lợi ích kinh tế, chính trị, văn hóa và xã hội.",
                visualHint: "Lợi ích - hợp tác - phát triển"
            }
        ],
        colorTheme: {
            accent: "#8B5CF6",
            softBg: "rgba(139, 92, 246, 0.12)",
            border: "rgba(139, 92, 246, 0.25)",
            iconBg: "rgba(139, 92, 246, 0.15)"
        },
        icon: "fa-solid fa-people-group",
        planet: {
            number: "05",
            name: "Hành tinh Cơ cấu xã hội",
            englishName: "Social Structure Planet",
            visualMotif: "network",
            orbitLabel: "Planet 05"
        },
        conceptModel: {
            type: "network",
            title: "Cơ cấu giai cấp và liên minh xã hội",
            description: "Chòm sao liên kết giai cấp công nhân, nông dân, trí thức và doanh nhân trong thời kỳ phát triển xã hội.",
            nodes: [
                { id: "n1", title: "Giai cấp công nhân", description: "Lực lượng giữ vai trò lãnh đạo liên minh thông qua Đảng, đi đầu trong sự nghiệp CNH, HĐH đất nước.", icon: "fa-solid fa-helmet-safety" },
                { id: "n2", title: "Giai cấp nông dân", description: "Lực lượng nòng cốt đông đảo trong sản xuất nông nghiệp, giữ vị trí quan trọng trong bảo đảm an ninh lương thực.", icon: "fa-solid fa-tractor" },
                { id: "n3", title: "Tầng lớp trí thức", description: "Đóng vai trò then chốt trong phát triển khoa học công nghệ, giáo dục, đóng góp tri thức cho xã hội.", icon: "fa-solid fa-graduation-cap" },
                { id: "n4", title: "Tầng lớp doanh nhân", description: "Động lực phát triển sản xuất, tạo công ăn việc làm, thúc đẩy tăng trưởng kinh tế bền vững.", icon: "fa-solid fa-briefcase" },
                { id: "n5", title: "Khối đại đoàn kết", description: "Đích đến tối cao của liên minh, tạo sự đồng thuận xã hội vì mục tiêu xây dựng đất nước định hướng XHCN.", icon: "fa-solid fa-arrows-to-circle" }
            ],
            connections: [
                { from: "n1", to: "n5" },
                { from: "n2", to: "n5" },
                { from: "n3", to: "n5" },
                { from: "n4", to: "n5" },
                { from: "n1", to: "n2" },
                { from: "n1", to: "n3" }
            ]
        },
        media: {
            title: "Liên minh công - nông - trí thức trong đổi mới",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/U_rH3pV8Dvg/hqdefault.jpg",
            description: "Khám phá vì sao liên minh giai cấp, tầng lớp lại là một nhu cầu kinh tế - kỹ thuật khách quan và là động lực nền tảng cho sự phát triển đất nước.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/U_rH3pV8Dvg"
        },
        caseStudy: {
            title: "Mô hình liên kết 'Bốn nhà' trong phát triển nông nghiệp Việt Nam",
            situation: "Để nâng cao giá trị hàng hóa nông sản xuất khẩu, mô hình liên kết giữa Nhà nông (giai cấp nông dân) - Nhà doanh nghiệp (tầng lớp doanh nhân) - Nhà khoa học (tầng lớp trí thức) và Nhà nước đã được triển khai, giúp cải thiện chuỗi giá trị và ứng dụng công nghệ sinh học.",
            question: "Làm thế nào để nâng cao tính cam kết, hạn chế tình trạng 'bẻ kèo' hợp đồng giữa doanh nghiệp và nông dân trong thực tế?",
            analysisHints: [
                "Thiết lập cơ chế chia sẻ lợi ích và phân bổ rủi ro rõ ràng bằng hợp đồng kinh tế có tính pháp lý cao.",
                "Phát huy vai trò cầu nối của các Hợp tác xã nông nghiệp kiểu mới làm đại diện cho tiếng nói nông dân.",
                "Nhà nước hỗ trợ hạ tầng kho bãi bảo quản, hỗ trợ tín dụng và làm trọng tài phân giải tranh chấp khách quan."
            ]
        }
    },
    {
        id: 6,
        stationName: "Dân tộc & Tôn giáo",
        centralQuestion: "Làm thế nào giải quyết vấn đề dân tộc, tôn giáo mà vẫn giữ đoàn kết xã hội?",
        oneLineSummary: "Chương này đi vào các vấn đề nhạy cảm của cộng đồng: bản sắc, niềm tin và chính sách đoàn kết.",
        whyItMatters: "Giúp sinh viên nhìn vấn đề dân tộc, tôn giáo bằng nguyên tắc khoa học, tôn trọng quyền tự do và chống chia rẽ.",
        keywords: ["Bình đẳng", "Tự quyết", "Tín ngưỡng", "Đoàn kết", "Chính sách"],
        quickUnderstand: "Dân tộc và tôn giáo đều gắn với bản sắc, niềm tin và đời sống cộng đồng. Giải quyết đúng cần tôn trọng quyền chính đáng, đồng thời bảo vệ đoàn kết xã hội.",
        keyIdeas: [
            {
                title: "Vấn đề dân tộc",
                shortExplain: "Cần bảo đảm bình đẳng, đoàn kết, tôn trọng quyền tự quyết và hỗ trợ cùng phát triển.",
                visualHint: "Bản sắc - bình đẳng - phát triển"
            },
            {
                title: "Vấn đề tôn giáo",
                shortExplain: "Tôn giáo là hiện tượng xã hội có nguồn gốc lâu dài, cần phân biệt niềm tin với lợi dụng chính trị.",
                visualHint: "Niềm tin - pháp luật - cộng đồng"
            },
            {
                title: "Chính sách Việt Nam",
                shortExplain: "Việt Nam tôn trọng tự do tín ngưỡng, tôn giáo và củng cố khối đại đoàn kết toàn dân tộc.",
                visualHint: "Tự do - tôn trọng - đoàn kết"
            }
        ],
        colorTheme: {
            accent: "#06B6D4",
            softBg: "rgba(6, 182, 212, 0.12)",
            border: "rgba(6, 182, 212, 0.25)",
            iconBg: "rgba(6, 182, 212, 0.15)"
        },
        icon: "fa-solid fa-handshake-angle",
        planet: {
            number: "06",
            name: "Hành tinh Đoàn kết",
            englishName: "Nation & Religion Planet",
            visualMotif: "balance",
            orbitLabel: "Planet 06"
        },
        conceptModel: {
            type: "balance",
            title: "Sự cân bằng trong giải quyết vấn đề Dân tộc và Tôn giáo",
            description: "Mô hình quỹ đạo hài hòa kết hợp giữa quyền bình đẳng, tôn trọng niềm tin và bảo vệ trật tự an ninh.",
            nodes: [
                { id: "n1", title: "Bình đẳng dân tộc", description: "Mọi dân tộc không phân biệt đa số hay thiểu số đều có quyền lợi và nghĩa vụ ngang nhau trước pháp luật.", icon: "fa-solid fa-scale-balanced" },
                { id: "n2", title: "Đoàn kết dân tộc", description: "Khối gắn kết keo sơn giữa các dân tộc, cùng tương trợ và giúp đỡ nhau phát triển kinh tế, văn hóa.", icon: "fa-solid fa-people-line" },
                { id: "n3", title: "Tôn trọng tự do tín ngưỡng", description: "Quyền tự do theo hoặc không theo bất kỳ tôn giáo nào, sinh hoạt tôn giáo đúng hiến pháp, pháp luật.", icon: "fa-solid fa-hands-praying" },
                { id: "n4", title: "Quản lý bằng pháp luật", description: "Quản lý các hoạt động tôn giáo bằng hành lang pháp lý rõ ràng, bảo vệ trật tự và thuần phong mỹ tục.", icon: "fa-solid fa-building-shield" },
                { id: "n5", title: "Đấu tranh chống lợi dụng", description: "Kiên quyết đấu tranh chống lại các thế lực thù địch lợi dụng dân tộc, tôn giáo để chia rẽ khối đại đoàn kết.", icon: "fa-solid fa-shield-virus" }
            ],
            connections: [
                { from: "n1", to: "n2" },
                { from: "n3", to: "n4" },
                { from: "n4", to: "n5" }
            ]
        },
        media: {
            title: "Chính sách dân tộc và tôn giáo của Việt Nam",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/IXhc9ME7Zs0/hqdefault.jpg",
            description: "Xem để hiểu rõ cách Việt Nam tổ chức quản lý đời sống tín ngưỡng đa dạng và củng cố đoàn kết giữa 54 dân tộc anh em.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/IXhc9ME7Zs0"
        },
        caseStudy: {
            title: "Phát triển du lịch cộng đồng gắn liền với bảo tồn văn hóa đồng bào thiểu số",
            situation: "Tại Sapa (Lào Cai) hay Bản Lác (Hòa Bình), phát triển du lịch homestay đã giúp cải thiện sinh kế rõ rệt cho người Dao, người Thái. Tuy nhiên, việc thương mại hóa quá mức có nguy cơ biến đổi bản sắc văn hóa và các lễ hội tâm linh truyền thống.",
            question: "Làm thế nào để phát triển du lịch nâng cao đời sống kinh tế nhưng vẫn bảo tồn được giá trị văn hóa nguyên bản của đồng bào?",
            analysisHints: [
                "Bảo đảm người dân bản địa đóng vai trò chủ thể quản lý du lịch và được phân phối lợi ích kinh tế công bằng.",
                "Tuyên truyền, nâng cao ý thức tự hào và bảo vệ nét đẹp trang phục, kiến trúc, nghi lễ truyền thống.",
                "Có sự giám sát chặt chẽ từ cơ quan văn hóa địa phương đối với việc dàn dựng biểu diễn nghệ thuật bản địa."
            ]
        }
    },
    {
        id: 7,
        stationName: "Gia đình Việt Nam",
        centralQuestion: "Vì sao gia đình được xem là tế bào của xã hội?",
        oneLineSummary: "Chương này khép lại hành trình bằng nơi gần gũi nhất: gia đình, nhân cách và đời sống xã hội.",
        whyItMatters: "Giúp sinh viên liên hệ môn học với đời sống cá nhân, bình đẳng giới, trách nhiệm gia đình và văn hóa Việt Nam.",
        keywords: ["Tế bào xã hội", "Hôn nhân", "Bình đẳng", "Giáo dục", "Hạnh phúc"],
        quickUnderstand: "Gia đình là môi trường đầu tiên nuôi dưỡng con người. Một xã hội muốn bền vững cần những gia đình tiến bộ, bình đẳng, hạnh phúc và có trách nhiệm.",
        keyIdeas: [
            {
                title: "Vị trí của gia đình",
                shortExplain: "Gia đình là tế bào xã hội, cầu nối giữa cá nhân và cộng đồng.",
                visualHint: "Cá nhân - gia đình - xã hội"
            },
            {
                title: "Gia đình mới",
                shortExplain: "Gia đình trong thời kỳ quá độ hướng tới hôn nhân tự nguyện, một vợ một chồng và bình đẳng.",
                visualHint: "Tự nguyện - bình đẳng - trách nhiệm"
            },
            {
                title: "Biến đổi ở Việt Nam",
                shortExplain: "Gia đình Việt Nam đang nhỏ hơn, linh hoạt hơn và đối diện nhiều thách thức giáo dục, văn hóa.",
                visualHint: "Truyền thống - hiện đại - thích nghi"
            }
        ],
        colorTheme: {
            accent: "#EC4899",
            softBg: "rgba(236, 72, 153, 0.12)",
            border: "rgba(236, 72, 153, 0.25)",
            iconBg: "rgba(236, 72, 153, 0.15)"
        },
        icon: "fa-solid fa-house-chimney",
        planet: {
            number: "07",
            name: "Hành tinh Gia đình",
            englishName: "Family Planet",
            visualMotif: "house",
            orbitLabel: "Planet 07"
        },
        conceptModel: {
            type: "house",
            title: "Trạm sinh thái chức năng Gia đình",
            description: "Mô hình kết nối các chức năng thiết yếu xây dựng và duy trì sự sống của xã hội.",
            nodes: [
                { id: "n1", title: "Tái sản xuất con người", description: "Chức năng sinh học tự nhiên duy trì nòi giống, nuôi dưỡng chăm sóc thế hệ kế cận.", icon: "fa-solid fa-baby" },
                { id: "n2", title: "Tổ chức đời sống kinh tế", description: "Tổ chức lao động sản xuất, tạo nguồn thu nhập và phân phối tiêu dùng ổn định trong gia đình.", icon: "fa-solid fa-basket-shopping" },
                { id: "n3", title: "Giáo dục (Xã hội hóa)", description: "Truyền thụ các giá trị đạo đức, văn hóa truyền thống, hình thành nhân cách ban đầu cho trẻ.", icon: "fa-solid fa-chalkboard-user" },
                { id: "n4", title: "Nuôi dưỡng tình cảm", description: "Nơi chia sẻ, động viên tinh thần, bảo đảm cân bằng tâm lý và hạnh phúc cho các thành viên.", icon: "fa-solid fa-heart-pulse" },
                { id: "n5", title: "Xây dựng gia đình mới", description: "Hướng tới xây dựng gia đình Việt Nam ấm no, tiến bộ, hạnh phúc, văn minh trong thời đại mới.", icon: "fa-solid fa-hands-holding-child" }
            ],
            connections: [
                { from: "n1", to: "n3" },
                { from: "n2", to: "n1" },
                { from: "n4", to: "n5" }
            ]
        },
        media: {
            title: "Gia đình Việt Nam trong thời đại số",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/E6N9eCHR6l4/hqdefault.jpg",
            description: "Thảo luận về sự thay đổi các mối quan hệ giữa cha mẹ và con cái, giữ gìn không gian sinh hoạt chung và giáo dục nhân cách trong bối cảnh bùng nổ thiết bị cá nhân.",
            sourceLabel: "Media Learning Station",
            url: "https://www.youtube-nocookie.com/embed/E6N9eCHR6l4"
        },
        caseStudy: {
            title: "Bình đẳng giới và sự chia sẻ trách nhiệm trong gia đình trẻ",
            situation: "Trong xã hội hiện đại, phụ nữ cũng tham gia lực lượng lao động xã hội ngang hàng nam giới. Tuy nhiên, định kiến cũ vẫn đè nặng gánh nặng 'việc nhà, nuôi con' lên vai người vợ, gây mất cân bằng tâm lý và căng thẳng trong hôn nhân.",
            question: "Làm thế nào để xây dựng nhận thức và thúc đẩy sự chia sẻ việc nhà thực chất giữa vợ và chồng trong các gia đình trẻ Việt Nam hiện nay?",
            analysisHints: [
                "Xóa bỏ các quan niệm định kiến cũ về vai trò giới thông qua truyền thông giáo dục và gương thực tiễn.",
                "Thiết lập cơ chế đối thoại thẳng thắn, phân công trách nhiệm rõ ràng dựa trên lịch trình của cả hai.",
                "Chính sách hỗ trợ thời gian nghỉ thai sản bình đẳng và dịch vụ hỗ trợ xã hội (nhà trẻ, bảo mẫu) chất lượng."
            ]
        },
        comparison: {
            title: "Gia đình truyền thống vs Gia đình hiện đại",
            keyDifference: "Quy mô, Cấu trúc quyền lực và Quan hệ giữa các thành viên",
            left: {
                label: "Gia đình truyền thống",
                points: [
                    "Quy mô lớn, thường là gia đình tam đại đồng đường, tứ đại đồng đường sống chung.",
                    "Cấu trúc quyền lực mang tính gia trưởng, mọi quyết định lớn đều do người nam lớn tuổi quyết định.",
                    "Tính gắn kết dòng họ, làng xã rất chặt chẽ nhưng tự do lựa chọn cá nhân bị hạn chế nhiều."
                ]
            },
            right: {
                label: "Gia đình hiện đại",
                points: [
                    "Quy mô nhỏ (gia đình hạt nhân chỉ gồm vợ, chồng và con cái sinh sống).",
                    "Quan hệ giữa các thành viên mang tính dân chủ, bình đẳng hơn, tôn trọng ý kiến con cái.",
                    "Coi trọng quyền tự do phát triển của mỗi cá nhân, song liên kết giữa các thế hệ dễ bị lỏng lẻo."
                ]
            }
        }
    }
];

const COSMIC_INTERACTIONS = {
    buildConcept: {
        question: "Lắp ráp mô hình: Chọn đúng 3 tiền đề trực tiếp về lý luận và khoa học dẫn đến sự ra đời của CNXHKH.",
        options: [
            { id: "opt1", text: "Chủ nghĩa xã hội không tưởng phê phán Pháp", isCorrect: true, feedback: "Chính xác! Nguồn gốc lý luận trực tiếp quan trọng nhất." },
            { id: "opt2", text: "Thuyết tiến hóa của Darwin", isCorrect: true, feedback: "Chính xác! Một trong ba phát kiến khoa học tự nhiên làm nền tảng thế giới quan." },
            { id: "opt3", text: "Triết học cổ điển Đức (phần Duy vật & Biện chứng)", isCorrect: true, feedback: "Chính xác! Tiền đề triết học để cải biến lý luận." },
            { id: "opt4", text: "Thuyết tương đối của Einstein", isCorrect: false, feedback: "Sai rồi! Thuyết tương đối ra đời đầu thế kỷ XX, sau khi CNXHKH đã hình thành từ lâu." },
            { id: "opt5", text: "Kinh tế học vĩ mô Keynesian", isCorrect: false, feedback: "Sai rồi! Đây là lý thuyết kinh tế hiện đại nửa sau thế kỷ XX." }
        ],
        correctExplanation: "Tiền đề trực tiếp của CNXHKH gồm Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, CNXH không tưởng Pháp kết hợp với 3 phát kiến khoa học tự nhiên lớn (Học thuyết tế bào, Thuyết tiến hóa, Định luật bảo toàn và chuyển hóa năng lượng)."
    },
    
    decisionScenario: {
        title: "Nhiệm vụ Quyết định: Ứng phó tín ngưỡng tôn giáo tại cơ sở",
        situation: "Tại một xã vùng cao đang xảy ra hiện tượng một số đối tượng xấu lợi dụng quyền tự do tín ngưỡng để truyền bá các hủ tục mê tín lạc hậu, lôi kéo bà con bỏ làm ăn nông nghiệp để cầu nguyện mong được giàu sang, gây bất ổn an ninh trật tự.",
        question: "Với vai trò là cán bộ quản lý văn hóa - xã hội địa phương, bạn sẽ đưa ra quyết định xử lý như thế nào để vừa tôn trọng tự do tín ngưỡng vừa giữ vững trật tự xã hội?",
        options: [
            {
                id: "dec1",
                text: "Tuyên truyền giải thích cho người dân phân biệt rõ hoạt động tín ngưỡng hợp pháp với hành vi lợi dụng tín ngưỡng; phối hợp lực lượng chức năng xử lý nghiêm đối tượng cầm đầu kích động.",
                isCorrect: true,
                feedback: "Đưa ra quyết định xuất sắc! Phương án này phản ánh đúng chính sách tôn giáo của Đảng và Nhà nước (tôn trọng đức tin cá nhân hợp pháp nhưng kiên quyết ngăn chặn hành vi lợi dụng tôn giáo làm hại lợi ích chung)."
            },
            {
                id: "dec2",
                text: "Ra quyết định tạm đình chỉ toàn bộ mọi hoạt động thờ cúng, sinh hoạt tôn giáo trong toàn xã để lập lại trật tự tuyệt đối trước mắt.",
                isCorrect: false,
                feedback: "Lựa chọn chưa phù hợp! Việc này vi phạm quyền tự do tín ngưỡng hợp pháp của công dân, dễ tạo cớ để các thế lực thù địch bên ngoài kích động, đẩy mâu thuẫn lên cao."
            },
            {
                id: "dec3",
                text: "Mặc kệ người dân tự do cầu nguyện vì đó là tự do đức tin cá nhân, chính quyền không có quyền can thiệp vào hành vi thờ cúng.",
                isCorrect: false,
                feedback: "Lựa chọn thiếu trách nhiệm! Để mặc các đối tượng lợi dụng lôi kéo người dân bỏ bê sản xuất sẽ hủy hoại đời sống kinh tế xã hội và gây mất ổn định an ninh cơ sở."
            }
        ]
    }
};

MICRO_LEARNING_DATA.forEach((micro) => {
    const chapter = CHAPTERS_DATA.find((item) => item.id === micro.id);
    if (chapter) {
        Object.assign(chapter, micro);
    }
});
