package Repositories;

/**
 * Created by Xinchen on 5/12/17.
 */
import java.util.List;

import DAO.Post;
import DAO.Topic;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepository extends CrudRepository<Post,Long>{

}