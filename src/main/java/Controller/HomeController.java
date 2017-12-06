package Controller;

import Repositories.PostRepository;
import Repositories.TopicRepository;
import model.Post;
import model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
//    @Autowired
//    PostRepository postRepository;
//
//    @Autowired
//    TopicRepository topicRepository;

    @RequestMapping(value = "/", method= RequestMethod.GET)
    public String getIndexPage(){
        System.out.println("requesting / ");
        return "index";
    }

//    @RequestMapping(value = "/save", method = RequestMethod.POST)
//    public String process(){
//        topicRepository.save(new Topic("Topic1"));
//        postRepository.save(new Post(1));
//        return "Done";
//    }

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }
}