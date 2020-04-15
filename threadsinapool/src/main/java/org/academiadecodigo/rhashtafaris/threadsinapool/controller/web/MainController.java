package org.academiadecodigo.rhashtafaris.threadsinapool.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    /**
     * Renders the home page view
     *
     * @return the view
     */
    @RequestMapping("/")
    public String home() {
        return "redirect:/home";
    }
}
