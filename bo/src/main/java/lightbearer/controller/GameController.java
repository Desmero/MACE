package lightbearer.controller;

import lightbearer.bean.Greeting;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {

    @GetMapping("/test")
    public String test(@RequestParam(value="name", defaultValue="World") String name) {
        return "lol";
    }


    //game create
    //return id


    //player login
    //return token

    //Game connect token

    //game add character


    //game master newround

    //game getStatus
}
