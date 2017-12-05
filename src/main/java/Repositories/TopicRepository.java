package Repositories;

/**
 * Created by Xinchen on 5/12/17.
 */
import java.util.List;

import DAO.Topic;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface TopicRepository extends CrudRepository<Topic,Long>{

}
